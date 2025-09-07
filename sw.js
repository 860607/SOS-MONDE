
const CACHE = 'sos-monde-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/js/app.js',
  '/assets/js/i18n.js',
  '/assets/img/icon-192.png',
  '/assets/img/icon-512.png',
  '/manifest.json'
];

self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});

self.addEventListener('activate', event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE && caches.delete(k))))
  );
});

self.addEventListener('fetch', event=>{
  event.respondWith(
    caches.match(event.request).then(resp=> resp || fetch(event.request))
  );
});
