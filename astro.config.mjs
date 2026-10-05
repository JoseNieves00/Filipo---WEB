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

// EDITAR: Sitio 100% estático, ultra rápido y listo para desplegar en Vercel, Netlify o GitHub Pages.
export default defineConfig({
  output: 'static',
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
