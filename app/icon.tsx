import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Icon generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#0A2463',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          position: 'relative',
        }}
      >
        {/* Simplified Lotus Shape for 32x32 clarity */}
        <div style={{
          display: 'flex',
          position: 'relative',
          width: '16px',
          height: '16px',
        }}>
          <div style={{ position: 'absolute', width: '8px', height: '14px', background: '#F8A5C2', borderRadius: '50%', left: '0px', top: '2px', transform: 'rotate(-45deg)', opacity: 0.9 }}></div>
          <div style={{ position: 'absolute', width: '8px', height: '14px', background: '#F8A5C2', borderRadius: '50%', right: '0px', top: '2px', transform: 'rotate(45deg)', opacity: 0.9 }}></div>
          <div style={{ position: 'absolute', width: '8px', height: '16px', background: '#0DB6B5', borderRadius: '50%', left: '4px', top: '0px' }}></div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
