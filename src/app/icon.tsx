import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#171717', 
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#818cf8', 
          borderRadius: '20%', 
          border: '2px solid #3730a3', 
          fontWeight: 900,
          fontFamily: 'sans-serif',
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  )
}