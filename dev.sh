#!/bin/bash
# Script de inicio rápido para Filippo Cocinas

# Asegurar que Node y npm locales estén en el PATH
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export PATH="$DIR/.tools/node-v20.18.0-darwin-arm64/bin:$PATH"
export ASTRO_TELEMETRY_DISABLED=1

echo "Iniciando servidor de desarrollo de Filippo Cocinas..."
npm run dev "$@"
