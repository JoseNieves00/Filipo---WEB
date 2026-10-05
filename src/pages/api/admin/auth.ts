/**
 * ==============================================================================
 * FILIPPO COCINAS | API ENDPOINT: src/pages/api/admin/auth.ts
 * ------------------------------------------------------------------------------
 * PROPÓSITO:
 * Gestionar la autenticación del panel de administración (/admin).
 * Valida usuario y contraseña, establece la cookie de sesión HTTP-only o cierra sesión.
 *
 * CREDENCIALES POR DEFECTO:
 * // EDITAR: Para cambiar la clave de acceso, modifica las constantes abajo
 * // o define ADMIN_USER y ADMIN_PASSWORD en las variables de entorno (.env).
 * ==============================================================================
 */

import type { APIRoute } from 'astro';

// EDITAR: Credenciales de acceso al panel CMS
const DEFAULT_USER = process.env.ADMIN_USER || 'admin';
const DEFAULT_PASS = process.env.ADMIN_PASSWORD || 'filippo2024';
const AUTH_COOKIE_NAME = 'filippo_admin_session';
const AUTH_TOKEN_SECRET = 'filippo_studio_secret_token_session';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { username, password, action } = body;

    // Acción de cierre de sesión
    if (action === 'logout') {
      cookies.delete(AUTH_COOKIE_NAME, { path: '/' });
      return new Response(JSON.stringify({ success: true, message: 'Sesión cerrada' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validación de usuario y contraseña
    if (username === DEFAULT_USER && password === DEFAULT_PASS) {
      cookies.set(AUTH_COOKIE_NAME, AUTH_TOKEN_SECRET, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // Sesión válida por 7 días
      });

      return new Response(JSON.stringify({ success: true, message: 'Autenticación exitosa' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: false, message: 'Usuario o contraseña incorrectos' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Error procesando solicitud' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
