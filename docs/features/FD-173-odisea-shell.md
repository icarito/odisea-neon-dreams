# FD-173: Odisea Shell — Smart Native Download

**Status:** Draft
**Priority:** Medium
**Effort:** Small
**Created:** 2026-06-13

## Problem

La DownloadSection muestra 3 tarjetas (WebGL, Linux, Windows) en igual jerarquía. El usuario tiene que identificar manualmente cuál le sirve. Un visitante en Android no sabe que hay APK, uno en Windows no sabe si bajar .exe o WebGL.

## Solution

Detectar la plataforma del visitante y recomendar el build nativo automáticamente.

### Platform Detection

```ts
function detectPlatform(): 'windows' | 'linux' | 'android' | 'ios' | 'macos' | 'unknown' {
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return 'android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'ios';
  if (/windows/i.test(ua)) return 'windows';
  if (/linux/i.test(ua) && !/android/i.test(ua)) return 'linux';
  if (/mac/i.test(ua)) return 'macos';
  return 'unknown';
}
```

### Behavior

| Plataforma detectada | Acción |
|---------------------|--------|
| **Windows** | Destacar tarjeta Windows (glow + badge "Recomendado"), WebGL como secundario |
| **Linux** | Destacar tarjeta Linux (glow + badge "Recomendado"), WebGL como secundario |
| **Android** | Mostrar tarjeta APK como primaria, WebGL como secundario |
| **iOS / macOS** | Solo WebGL (no hay build nativo), mensaje "Próximamente build nativa" |
| **Unknown** | Mostrar todas en igual jerarquía (comportamiento actual) |

### Visual

- Tarjeta recomendada: borde cyan/orange glow, badge "✨ Recomendado para tu equipo"
- Las otras tarjetas: ligeramente atenuadas (opacity reducida, sin glow)
- WebGL siempre visible como fallback

### Implementación

Hook `usePlatformDetect()` en `DownloadSection.tsx`. Sin dependencias nuevas.

```tsx
const { platform, isNative } = usePlatformDetect();
```

## Scope

**In scope:**
- Detección de SO en DownloadSection
- Destacar build nativo recomendado
- Badge "Recomendado para tu equipo"
- Android APK como opción primaria si se detecta Android

**Backlog:**
- Detección de arquitectura (ARM vs x64) para Linux
- Install prompt nativo (PWA install)
- Descarga directa sin salir de la página

## Files Changed

- `src/components/DownloadSection.tsx` — agregar usePlatformDetect, lógica de highlight
- `src/hooks/usePlatformDetect.ts` — nuevo hook

## Dependencies

Ninguna nueva. Solo `navigator.userAgent`.
