# Guía de Instalación y Despliegue: Filippo Cocinas

Este documento contiene las instrucciones paso a paso para ejecutar el proyecto en entorno local y desplegarlo en producción.

---

## 1. Requisitos Previos

- **Node.js**: Versión 18.x o superior (recomendado 20.x LTS o 22.x).
- **npm**: Versión 9.x o superior (incluido con Node.js).
- **Git** (opcional, para control de versiones).

---

## 2. Ejecución en Entorno Local (Desarrollo)

1. Abre tu terminal en la raíz del proyecto:
   ```bash
   cd "Filipo - DEV"
   ```

2. Instala las dependencias del proyecto (si no están instaladas):
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

4. Abre tu navegador web en:
   - **Landing Page Pública:** [http://localhost:3000](http://localhost:3000)
   - **Panel de Administración (CMS):** [http://localhost:3000/admin](http://localhost:3000/admin)
   - **Credenciales iniciales:**
     - Usuario: `admin`
     - Contraseña: `filippo2024`

---

## 3. Construcción para Producción

Para compilar el proyecto y verificar que todo esté libre de errores sintácticos y de tipos:

```bash
npm run build
```

Esto generará el paquete de producción en la carpeta `dist/` optimizado para servir con el adaptador de Node.js o el proveedor elegido.

Para previsualizar la compilación exacta de producción en local:
```bash
npm run preview
```

---

## 4. Opciones de Despliegue en la Nube

### Opción A: Despliegue en VPS o Servidor en la Nube (DigitalOcean, AWS, Railway, Render)
Dado que el proyecto utiliza `@astrojs/node` en modo `standalone`, se puede ejecutar en cualquier servidor con Node.js o Docker.

1. Sube los archivos al servidor.
2. Ejecuta `npm install --production` y `npm run build`.
3. Inicia el proceso con un gestor como **PM2**:
   ```bash
   pm2 start ./dist/server/entry.mjs --name "filippo-cocinas"
   ```
4. Configura Nginx como proxy inverso hacia el puerto 3000 con certificado SSL (Let's Encrypt gratuito).

### Opción B: Despliegue en Vercel
1. Instala el adaptador de Vercel si prefieres funciones serverless sin gestionar servidores:
   ```bash
   npm install @astrojs/vercel
   ```
2. En `astro.config.mjs`, reemplaza el adaptador:
   ```javascript
   import vercel from '@astrojs/vercel/serverless';
   export default defineConfig({
     output: 'server',
     adapter: vercel(),
     // ...
   });
   ```
3. Conecta el repositorio en [vercel.com](https://vercel.com) y despliega con un clic.

### Opción C: Despliegue en Netlify
1. Instala `@astrojs/netlify`.
2. Actualiza `astro.config.mjs` para usar `adapter: netlify()`.
3. Conecta el repositorio en Netlify.

---

## 5. Variables de Entorno (Opcional)

Si deseas cambiar las credenciales de administración sin tocar el código fuente, crea un archivo `.env` en la raíz del proyecto:

```env
ADMIN_USER=tu_usuario_personalizado
ADMIN_PASSWORD=tu_clave_secreta_segura
PORT=3000
```
