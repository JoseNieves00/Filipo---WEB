/**
 * ==============================================================================
 * FILIPPO COCINAS | UTILIDAD: src/utils/imageOptimizer.ts
 * ------------------------------------------------------------------------------
 * PROPÓSITO:
 * Procesamiento y optimización automática de imágenes para el panel CMS.
 * Convierte formatos pesados (PNG, JPEG grande) al estándar moderno WebP,
 * ajusta el ancho máximo a 1600px y reduce el peso en más del 70% sin perder nitidez.
 *
 * RELACIÓN:
 * Es utilizado por el endpoint de subida `src/pages/api/admin/upload.ts`.
 * ==============================================================================
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export interface OptimizeImageResult {
  filename: string;
  url: string;
  width: number;
  height: number;
  sizeBytes: number;
}

/**
 * Optimiza un búfer de imagen y lo guarda en `public/uploads/` en formato WebP.
 *
 * @param buffer - Búfer binario del archivo subido
 * @param originalName - Nombre original del archivo
 * @returns Metadatos con la ruta pública para la galería
 */
export async function optimizeAndSaveImage(
  buffer: Buffer,
  originalName: string
): Promise<OptimizeImageResult> {
  const uploadsDir = path.resolve(process.cwd(), 'public/uploads');

  // Asegura que la carpeta de subidas exista
  await fs.mkdir(uploadsDir, { recursive: true });

  // Sanitiza el nombre eliminando caracteres extraños y reemplazando espacios
  const cleanBaseName = path
    .parse(originalName)
    .name.toLowerCase()
    .replace(/[^a-z0-9_-]/g, '-')
    .replace(/-+/g, '-');

  const timestamp = Date.now();
  const outputFilename = `${cleanBaseName}-${timestamp}.webp`;
  const outputPath = path.join(uploadsDir, outputFilename);

  // Redimensiona inteligentemente: máximo 1600px de ancho y convierte a WebP calidad 80
  const processedBuffer = await sharp(buffer)
    .rotate() // Respeta orientación EXIF de cámaras y celulares
    .resize({
      width: 1600,
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({ quality: 80, effort: 4 })
    .toBuffer();

  // Guardar archivo optimizado en disco
  await fs.writeFile(outputPath, processedBuffer);

  const metadata = await sharp(processedBuffer).metadata();

  return {
    filename: outputFilename,
    url: `/uploads/${outputFilename}`,
    width: metadata.width || 1200,
    height: metadata.height || 900,
    sizeBytes: processedBuffer.length
  };
}
