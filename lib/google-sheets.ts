export interface FetchOptions {
  revalidate?: number | false;
  tags?: string[];
}

/**
 * Utility to fetch and parse data from a public Google Sheet (CSV format).
 */
export async function fetchSheetData<T>(
  sheetIdOrUrl: string, 
  gid: string = '0',
  options: FetchOptions = {}
): Promise<T[]> {
  if (!sheetIdOrUrl || typeof sheetIdOrUrl !== 'string' || sheetIdOrUrl.includes("REPLACE_WITH")) {
    if (!sheetIdOrUrl) console.warn("Sheet URL is empty");
    return [];
  }
  
  try {
    let url = "";
    if (sheetIdOrUrl.startsWith("http")) {
      url = sheetIdOrUrl;
    } else {
      url = `https://docs.google.com/spreadsheets/d/${sheetIdOrUrl}/export?format=csv&gid=${gid}`;
    }
    
    const revalidate = options.revalidate !== undefined 
      ? options.revalidate 
      : (process.env.NODE_ENV === 'development' ? 0 : 600);

    const response = await fetch(url, { 
      next: { 
        revalidate,
        tags: options.tags
      } 
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch sheet from ${url}: ${response.statusText}`);
      return [];
    }

    const csvText = await response.text();
    if (!csvText || typeof csvText !== 'string') {
      return [];
    }

    const rows = csvText.split('\n').filter(row => row && row.trim() !== '');
    
    if (rows.length < 2) return [];

    const headers = parseCSVLine(rows[0]);
    const dataRows = rows.slice(1);

    return dataRows.map((row) => {
      const columns = parseCSVLine(row);
      const entry: any = {};
      
      headers.forEach((header, index) => {
        if (!header) return;
        
        const rawHeader = header.trim().replace(/^"|"$/g, "");
        let value = (columns[index] || '').trim().replace(/^"|"$/g, "");
        
        if (value && typeof value === 'string' && (value.includes('drive.google.com') || value.includes('images.unsplash.com'))) {
           value = transformImageUrl(value);
        }

        entry[rawHeader] = value;
        
        const normalizedKey = rawHeader.charAt(0).toLowerCase() + rawHeader.slice(1).replace(/\s+/g, '');
        if (normalizedKey && normalizedKey !== rawHeader) {
          entry[normalizedKey] = entry[rawHeader];
        }
        
        const lowerKey = rawHeader.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (lowerKey && lowerKey !== rawHeader && lowerKey !== normalizedKey) {
          entry[lowerKey] = entry[rawHeader];
        }
      });
      
      return entry as T;
    });
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return [];
  }
}

/**
 * Transforms various image URLs into optimized versions.
 */
export function transformImageUrl(url: string): string {
  if (!url || typeof url !== 'string') return url;
  
  if (url.includes(',')) {
    return url.split(',').map(s => transformImageUrl(s.trim())).join(',');
  }

  const driveRegex = /drive\.google\.com\/(?:file\/d\/|open\?id=)([^/?]+)/;
  const match = url.match(driveRegex);
  
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  
  if (url.includes('images.unsplash.com') && !url.includes('auto=format')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}auto=format&fit=crop&q=80`;
  }
  
  return url;
}

/**
 * Basic CSV parser that handles quoted values.
 */
function parseCSVLine(line: string): string[] {
  if (!line || typeof line !== 'string') return [];
  
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}
