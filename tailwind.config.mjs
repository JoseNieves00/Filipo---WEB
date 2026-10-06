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
        // EDITAR: Paleta de colores vinculada a variables CSS personalizables (ahora en tema oscuro)
        filippo: {
          linen: 'var(--color-bg-primary)',         // Ahora es Fondo Negro
          white: 'var(--color-bg-surface)',         // Ahora es Gris Oscuro (Superficie)
          cream: 'var(--color-bg-subtle)',          // Ahora es Gris Medio
          charcoal: 'var(--color-text-primary)',    // Ahora es Blanco (Texto principal)
          muted: 'var(--color-text-muted)',         // Ahora es Gris claro (Texto secundario)
          stone: 'var(--color-accent-stone)',       // Ahora es Gris acento
          oak: 'var(--color-accent-wood)',          // Ahora es Amarillo/Dorado
          'oak-dark': 'var(--color-accent-wood-hover)', // Amarillo oscuro hover
          dark: 'var(--color-bg-dark)'              // Negro absoluto
        },
        // Color oficial de WhatsApp y hover
        whatsapp: {
          DEFAULT: 'var(--color-accent-wa)',
          dark: 'var(--color-accent-wa-hover)',
          light: '#DCF8C6'
        }
      },
      fontFamily: {
        // EXTENDER: Puedes cambiar las fuentes cambiando las variables en design-tokens.css
        serif: ['var(--font-heading, "DM Serif Display")', 'Georgia', 'serif'],
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
