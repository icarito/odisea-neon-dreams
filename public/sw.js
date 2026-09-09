// Kill-switch de service worker (migración 2026-09).
// El dashboard PWA antes vivía en odisea.educa.juegos/ y registraba un SW con
// scope "/". Los navegadores con ese SW instalado seguirían sirviendo el
// dashboard viejo desde caché. Este SW reemplaza al anterior: borra todos los
// caches, se desregistra a sí mismo y recarga las pestañas abiertas.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windowClients = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      windowClients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
