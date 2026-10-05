/**
 * ==============================================================================
 * FILIPPO COCINAS | API ENDPOINT: src/pages/api/admin/upload.ts
 * ------------------------------------------------------------------------------
 * PROPÓSITO:
 * Endpoint para recibir fotografías subidas desde el panel CMS de la galería,
 * optimizarlas a WebP mediante Sharp y guardarlas en `public/uploads/`.
 *
 * SEGURIDAD:
 * Protegido mediante verificación de sesión de administrador.
 * ==============================================================================
 */

import type { APIRoute } from 'astro';
import { optimizeAndSaveImage } from '../../../utils/imageOptimizer';

const AUTH_COOKIE_NAME = 'filippo_admin_session';
const AUTH_TOKEN_SECRET = 'filippo_studio_secret_token_session';

export const POST: APIRoute = async ({ request, cookies }) => {
  const sessionCookie = cookies.get(AUTH_COOKIE_NAME);

  if (!sessionCookie || sessionCookie.value !== AUTH_TOKEN_SECRET) {
    return new Response(JSON.stringify({ success: false, message: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return new Response(JSON.stringify({ success: false, message: 'No se envió ningún archivo válido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Optimización automática y guardado en WebP
    const optimized = await optimizeAndSaveImage(buffer, file.name);

    return new Response(JSON.stringify({
      success: true,
      url: optimized.url,
      filename: optimized.filename,
      sizeBytes: optimized.sizeBytes,
      message: 'Imagen optimizada y guardada exitosamente'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Error al procesar la imagen'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
