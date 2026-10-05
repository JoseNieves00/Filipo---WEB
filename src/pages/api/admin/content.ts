/**
 * ==============================================================================
 * FILIPPO COCINAS | API ENDPOINT: src/pages/api/admin/content.ts
 * ------------------------------------------------------------------------------
 * PROPÓSITO:
 * Endpoint REST para consultar y actualizar los contenidos del sitio web
 * almacenados en `src/data/siteContent.json`.
 *
 * SEGURIDAD:
 * Las peticiones POST requieren que la cookie de sesión esté activa y válida.
 * ==============================================================================
 */

import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

const AUTH_COOKIE_NAME = 'filippo_admin_session';
const AUTH_TOKEN_SECRET = 'filippo_studio_secret_token_session';

const contentFilePath = path.resolve(process.cwd(), 'src/data/siteContent.json');

export const GET: APIRoute = async () => {
  try {
    const rawData = await fs.readFile(contentFilePath, 'utf-8');
    return new Response(rawData, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'No se pudo leer el contenido' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST: APIRoute = async ({ request, cookies }) => {
  const sessionCookie = cookies.get(AUTH_COOKIE_NAME);

  // Verificación de autorización
  if (!sessionCookie || sessionCookie.value !== AUTH_TOKEN_SECRET) {
    return new Response(JSON.stringify({ success: false, message: 'No autorizado. Inicie sesión.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const updatedContent = await request.json();

    // Guardado persistente formateado en src/data/siteContent.json
    await fs.writeFile(contentFilePath, JSON.stringify(updatedContent, null, 2), 'utf-8');

    return new Response(JSON.stringify({
      success: true,
      message: 'Contenido actualizado correctamente en el sitio'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Error al guardar los cambios'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
