# Despliegue y PWA

## PWA y modo offline

La app está configurada como PWA con:

- **Cache en navegación**: las rutas se cachean al navegar (`cacheOnFrontEndNav`, `cacheStartUrl`).
- **Página offline**: si no hay red se muestra `/~offline` (fallback configurado en `next.config.ts`).
- **Recarga al volver online**: `reloadOnOnline: true`.

El service worker y el manifest se generan en `public/` en cada build de producción.

## Build normal (para hosting con Node)

```bash
npm run build
npm start
```

Genera el build en `.next/`. Para producción usa un host que ejecute Node (Vercel, Netlify, Railway, Firebase con Cloud Functions, etc.) y ejecute `next start` o el comando que proporcione el host.

## Export estático (carpeta `out/`)

Para subir solo archivos estáticos a un hosting (Firebase Hosting, GitHub Pages, S3, etc.):

**Windows (CMD):**
```bash
set NEXT_STATIC_EXPORT=1 && npm run build
```

**Windows (PowerShell):**
```powershell
$env:NEXT_STATIC_EXPORT="1"; npm run build
```

**Linux / macOS:**
```bash
NEXT_STATIC_EXPORT=1 npm run build
```

Si el build termina bien, la salida estará en la carpeta **`out/`**. Sube todo el contenido de `out/` a la raíz de tu hosting estático.

> **Nota:** Con Next.js 15 puede aparecer un error de prerender (`useContext` null). Si ocurre, usa el build normal y un host que ejecute el servidor Node (p. ej. Vercel o Netlify).
