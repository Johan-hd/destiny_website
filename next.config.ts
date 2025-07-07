import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Aquí irá la configuración de tu proyecto de Next.js
  devIndicators: false, // Desactiva los indicadores de desarrollo

  // Añadimos cabeceras de seguridad personalizadas
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Previene que el navegador "adivine" el tipo de contenido de un archivo
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // Previene que tu sitio sea incrustado en un <iframe> en otra web (Clickjacking)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },

          // Activa la protección contra XSS en navegadores más antiguos
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          
          // Le dice al navegador que siempre se comunique usando HTTPS (más seguro)
          // Una vez que tengas un dominio con certificado SSL, puedes descomentar la siguiente línea
          // { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
};

export default nextConfig;