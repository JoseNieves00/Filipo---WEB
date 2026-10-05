/**
 * ==============================================================================
 * FILIPPO COCINAS | UTILIDAD DE WHATSAPP: src/utils/whatsapp.ts
 * ------------------------------------------------------------------------------
 * PROPÓSITO:
 * Centralizar toda la lógica de construcción de enlaces a WhatsApp (wa.me).
 * Evita tener números de teléfono o plantillas de texto dispersos por el código.
 *
 * RELACIÓN:
 * Es utilizado por los botones Hero, Galería, Formulario de Contacto y el
 * Botón Flotante. Obtiene valores por defecto de `src/data/siteContent.json`.
 *
 * // EDITAR: Para modificar el número predeterminado o los mensajes,
 * // puedes hacerlo en `src/data/siteContent.json` o directamente desde el panel
 * // de administración en `/admin`.
 * ==============================================================================
 */

import siteContent from '../data/siteContent.json';

export interface WhatsAppOptions {
  phone?: string;
  message?: string;
}

/**
 * Limpia y normaliza un número de teléfono eliminando espacios, signos '+' o guiones.
 * Por ejemplo: "+57 (300) 456-7890" -> "573004567890"
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Genera la URL completa de WhatsApp (wa.me) con el número y el mensaje codificado.
 *
 * @param message - Texto que se prellenará en la conversación de WhatsApp
 * @param customPhone - (Opcional) Número alternativo si difiere del principal
 * @returns Cadena con el enlace listo para <a href="...">
 */
export function getWhatsAppUrl(message?: string, customPhone?: string): string {
  // // EDITAR: Obtiene el número del JSON central; si no existe, usa el fallback
  const phone = customPhone || siteContent.whatsapp.number || '573004567890';
  const cleanPhone = cleanPhoneNumber(phone);
  const text = message || siteContent.whatsapp.defaultMessages.general;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text.trim())}`;
}

/**
 * Genera el enlace de consulta específico para un proyecto de la galería.
 *
 * @param projectName - Nombre del proyecto (ej. "Residencia Aliso")
 */
export function getProjectInquiryUrl(projectName: string): string {
  const template = siteContent.whatsapp.defaultMessages.projectInquiry;
  const message = template.replace('{projectName}', projectName);
  return getWhatsAppUrl(message);
}

/**
 * Genera el mensaje estructurado a partir de los datos ingresados en el formulario web.
 */
export function buildFormWhatsAppMessage(data: {
  name: string;
  projectType: string;
  city: string;
  comments?: string;
}): string {
  const template = siteContent.whatsapp.defaultMessages.formTemplate;
  return template
    .replace('{name}', data.name || 'Cliente')
    .replace('{projectType}', data.projectType || 'Cocina a medida')
    .replace('{city}', data.city || 'No especificada')
    .replace('{comments}', data.comments ? `"${data.comments}"` : 'Ninguno');
}
