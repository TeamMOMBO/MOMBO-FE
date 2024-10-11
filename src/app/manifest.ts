import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '맘보',
    description: '맘보(MOMBO)',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    theme_color: '#FFFFFF',
    background_color: '#FFFFFF',
    icons: [
      {
        src: 'icons/icon-96.png',
        type: 'image/png',
        sizes: '96x96',
      },
      {
        src: 'icons/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
      {
        src: 'icons/icon-maskable-640.png',
        type: 'image/png',
        sizes: '640x640',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/bg.png',
        sizes: '1280x720',
        type: 'image/png',
      },
    ],
  };
}
