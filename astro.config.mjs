/**
 * ==============================================================================
 * FILIPPO COCINAS | CONFIGURACIÓN PRINCIPAL: astro.config.mjs
 * ------------------------------------------------------------------------------
 * PROPÓSITO:
 * Archivo central de configuración de Astro. Define integraciones (Tailwind CSS),
 * el modo de renderizado y el adaptador para endpoints del servidor.
 *
 * RELACIÓN:
 * Configura la compilación de la landing page pública y habilita la ejecución
 * del backend ligero para el panel de administración (/admin y /api/admin/*).
 *
 * ARQUITECTURA:
 * Usamos 'output: "hybrid"' (o "server") con el adaptador Node.js en modo
 * 'standalone'. Esto permite que la landing pública se sirva con máxima
 * velocidad estática, mientras los endpoints del CMS (/api/admin/...) procesan
 * autenticación, guardado de textos y subida de imágenes dinámicamente.
 * ==============================================================================
 */

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// EDITAR: Si se despliega en Vercel, Netlify o Cloudflare, se puede cambiar el adaptador aquí.
// EXTENDER: Aquí se pueden agregar integraciones como @astrojs/sitemap o analytics.
export default defineConfig({
  output: 'server', // Habilita SSR para el panel de control y API endpoints
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false // Controlamos los estilos base desde src/styles/global.css
    })
  ],
  server: {
    port: 3000,
    host: true
  }
});
