import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BE Experience',
    short_name: 'BE Experience',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#888B8D',
    theme_color: '#888B8D',
    icons: [
      {
        src: '/icon144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon512_rounded.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    screenshots: [
      {
        src: '/icon512_rounded.png',
        type: 'image/png',
        sizes: '512x512',
        form_factor: 'narrow'
      },
      {
        src: '/icon512_maskable.png',
        type: 'image/png',
        sizes: '512x512',
        form_factor: 'wide'
      }
    ]
  }
}