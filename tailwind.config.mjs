/**
 * ==============================================================================
 * FILIPPO COCINAS | CONFIGURACIÓN DE ESTILOS: tailwind.config.mjs
 * ------------------------------------------------------------------------------
 * PROPÓSITO:
 * Configuración de Tailwind CSS adaptada a la identidad visual de Filippo Cocinas.
 * Define la paleta de neutros cálidos, fuentes tipográficas y espaciados armónicos.
 *
 * RELACIÓN:
 * Consume variables de diseño de `src/styles/design-tokens.css` para permitir
 * cambios globales de color o tipografía sin modificar componentes individuales.
 *
 * GUÍA DE PERSONALIZACIÓN:
 * - Para cambiar los colores de la marca, edita `src/styles/design-tokens.css`.
 * - Para agregar nuevos tamaños o sombras, amplía la sección 'extend' abajo.
 * ==============================================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // EDITAR: Paleta de colores vinculada a variables CSS personalizables
        filippo: {
          linen: 'var(--color-bg-primary, #FAF8F5)',         // Fondo principal lino / off-white
          white: 'var(--color-bg-surface, #FFFFFF)',         // Superficies limpias y tarjetas
          cream: 'var(--color-bg-subtle, #F4EFEB)',          // Fondos secundarios sutiles
          charcoal: 'var(--color-text-primary, #1C1B19)',    // Tipografía principal y alto contraste
          muted: 'var(--color-text-muted, #706D67)',         // Texto secundario y etiquetas
          stone: 'var(--color-accent-stone, #E8E2D8)',       // Acento piedra travertino / bordes
          oak: 'var(--color-accent-wood, #B88E65)',          // Acento roble natural / madera cálida
          'oak-dark': '#9A724E',                             // Roble oscuro para hover
          dark: '#141413'                                    // Fondo contrastado (ej. pie de página)
        },
        // Color oficial de WhatsApp y hover
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          light: '#DCF8C6'
        }
      },
      fontFamily: {
        // EXTENDER: Puedes cambiar las fuentes cambiando las variables en design-tokens.css
        serif: ['var(--font-heading, "Playfair Display")', 'Georgia', 'serif'],
        sans: ['var(--font-body, "Plus Jakarta Sans")', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(28, 27, 25, 0.05)',
        'card': '0 10px 30px -4px rgba(28, 27, 25, 0.08)',
        'floating': '0 12px 35px -4px rgba(0, 0, 0, 0.15)'
      },
      letterSpacing: {
        'widest-caps': '0.15em'
      }
    }
  },
  plugins: []
};
