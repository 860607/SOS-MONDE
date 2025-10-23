/* SOS.Monde – Service Worker */
const CACHE_NAME = 'sosmonde-v1';
const CORE_ASSETS = [
  '/', '/index.html',
  '/manifest.webmanifest', '/sw.js',
  '/icons/icon-192.png', '/icons/icon-512.png',
  '/robots.txt', '/sitemap.xml', '/ads.txt'
];

// Installation : pré-cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

// Activation : nettoyage anciens caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE_NAME) && caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Stratégie :
// - Navigations HTML : network-first (offline → cache)
// - Assets statiques : cache-first (perf)
self.addEventListener('fetch', (e) => {
  const req = e.request;

  // Navigations (pages)
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE_NAME);
        cache.put(req, fresh.clone());
        return fresh;
      } catch (_) {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match('/index.html');
        return cached || new Response('Hors ligne', { status: 503, statusText: 'Offline' });
      }
    })());
    return;
  }

  // Statiques : cache-first
  e.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      cache.put(req, fresh.clone());
      return fresh;
    } catch (_) {
      return new Response('Ressource indisponible', { status: 404 });
    }
  })());
});
