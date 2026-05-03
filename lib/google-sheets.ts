/**
 * Utility to fetch and parse data from a public Google Sheet (CSV format).
 */
export async function fetchSheetData<T>(sheetIdOrUrl: string, gid: string = '0'): Promise<T[]> {
  if (!sheetIdOrUrl || sheetIdOrUrl.includes("REPLACE_WITH")) {
    // Silence placeholder warnings to keep terminal clean, but keep for empty strings
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
    
    const response = await fetch(url, { 
      next: { 
        revalidate: process.env.NODE_ENV === 'development' ? 0 : 600 // 10 minutes in prod, no cache in dev
      } 
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet: ${response.statusText}`);
    }

    const csvText = await response.text();
    const rows = csvText.split(/\r?\n/).filter(row => row.trim() !== '');
    
    if (rows.length < 2) return [];

    const headers = parseCSVLine(rows[0]);

    const dataRows = rows.slice(1);

    return dataRows.map((row) => {
      const columns = parseCSVLine(row);
      const entry: any = {};
      
      headers.forEach((header, index) => {
        const rawHeader = header.trim().replace(/^"|"$/g, "");
        let value = columns[index]?.trim().replace(/^"|"$/g, "") || '';
        
        // Auto-transform Google Drive URLs for images
        if (typeof value === 'string' && (value.includes('drive.google.com') || value.includes('images.unsplash.com'))) {
           value = transformImageUrl(value);
        }

        entry[rawHeader] = value;
        
        // Also provide a normalized version (camelCase friendly)
        const normalizedKey = rawHeader.charAt(0).toLowerCase() + rawHeader.slice(1).replace(/\s+/g, '');
        if (normalizedKey !== rawHeader) {
          entry[normalizedKey] = entry[rawHeader];
        }
        
        // Also provide lowercase version for fallback
        const lowerKey = rawHeader.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (lowerKey !== rawHeader && lowerKey !== normalizedKey) {
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
 * Specifically handles Google Drive links for direct display.
 */
export function transformImageUrl(url: string): string {
  if (!url) return url;
  
  // Handle multiple URLs (comma separated)
  if (url.includes(',')) {
    return url.split(',').map(s => transformImageUrl(s.trim())).join(',');
  }

  // Google Drive shared links transformation
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // Or: https://drive.google.com/open?id=FILE_ID
  const driveRegex = /drive\.google\.com\/(?:file\/d\/|open\?id=)([^/?]+)/;
  const match = url.match(driveRegex);
  
  if (match && match[1]) {
    // This is the most reliable way to display Drive images in <img> tags
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  
  // Add Unsplash optimization if missing
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
