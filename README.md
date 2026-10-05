# Filippo Cocinas | Landing Page & CMS Minimalista

Landing page de alta conversión y estética arquitectónica minimalista para **Filippo**, estudio de diseño, fabricación e instalación de cocinas residenciales de alta gama.

Construido con **Astro 5**, **Tailwind CSS**, **Design Tokens** y un **Panel CMS Autónomo Embebido** con conversión directa a **WhatsApp**.

---

## 🌟 Características Principales

- **One-Page Arquitectónico:** Navegación fluida con menú de anclas, tipografía editorial refinada (*Playfair Display* & *Plus Jakarta Sans*) y paleta de neutros cálidos (Lino, Roble natural, Travertino y Carbón).
- **Enfoque en Conversión (WhatsApp Hub):** Todos los botones clave abren WhatsApp con mensajes contextuales prellenados. Formulario interactivo que recopila datos del cliente y estructura el mensaje antes de enviar.
- **Panel de Administración Autónomo (/admin):**
  - Acceso protegido por usuario y contraseña.
  - Edición de textos y número de WhatsApp sin tocar código.
  - Subida de fotografías a la galería con **optimización y compresión automática a formato WebP**.
- **100% Modular y Escalable:** Componentes independientes desacoplados de la capa de datos (`siteContent.json`) y tokens (`design-tokens.css`).
- **Comentarios Exhaustivos en Español:** Cada archivo, componente y función documenta qué hace, por qué se hizo así y cómo extenderlo (`// EDITAR:`, `// EXTENDER:`).

---

## 🚀 Inicio Rápido

### 1. Iniciar en Modo Desarrollo
```bash
npm run dev
```

- **Sitio Público:** [http://localhost:3000](http://localhost:3000)
- **Panel de Administración:** [http://localhost:3000/admin](http://localhost:3000/admin)
  - Usuario: `admin`
  - Contraseña: `filippo2024`

### 2. Compilar para Producción
```bash
npm run build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
Filipo - DEV/
├── astro.config.mjs               # Configuración de Astro y SSR standalone
├── package.json                   # Dependencias y scripts
├── tailwind.config.mjs            # Configuración de Tailwind CSS vinculada a tokens
├── tsconfig.json                  # Configuración de TypeScript
├── public/
│   ├── favicon.svg                # Monograma de la marca Filippo
│   ├── images/                    # Fotografías iniciales de cocinas de autor
│   └── uploads/                   # Carpeta de imágenes subidas por el CMS
├── src/
│   ├── data/
│   │   └── siteContent.json       # Base de datos local editable desde el panel
│   ├── styles/
│   │   ├── design-tokens.css      # // EDITAR: Variables de color, fuentes y espacios
│   │   └── global.css             # Estilos globales y utilidades
│   ├── utils/
│   │   ├── whatsapp.ts            # Generador centralizado de URLs wa.me
│   │   └── imageOptimizer.ts      # Procesamiento automático WebP con Sharp
│   ├── layouts/
│   │   ├── Layout.astro           # Plantilla base pública con SEO y Schema.org
│   │   └── AdminLayout.astro      # Plantilla del panel CMS
│   ├── components/
│   │   ├── common/                # Botones y encabezados reutilizables
│   │   ├── navigation/            # Navbar fijo y Footer
│   │   ├── sections/              # Hero, Services, Gallery, Process, etc.
│   │   └── widgets/               # Botón flotante WhatsApp y Lightbox
│   └── pages/
│       ├── index.astro            # Landing page principal ensamblada
│       ├── admin/                 # Pantalla de Login y Dashboard del CMS
│       └── api/admin/             # Endpoints de autenticación, contenido y subida
└── docs/
    ├── GUIA_INSTALACION_Y_DESPLIEGUE.md # Manual técnico para desarrolladores
    ├── GUIA_CLIENTE_CMS.md              # Manual de usuario sencillo para el cliente
    └── ARQUITECTURA_Y_ROADMAP.md        # Hoja de ruta de escalabilidad futura
```

---

## 📚 Documentación Adicional

- [Guía de Instalación y Despliegue](docs/GUIA_INSTALACION_Y_DESPLIEGUE.md)
- [Manual del Cliente para el CMS](docs/GUIA_CLIENTE_CMS.md)
- [Arquitectura y Hoja de Ruta](docs/ARQUITECTURA_Y_ROADMAP.md)
