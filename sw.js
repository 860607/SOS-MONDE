
const CACHE='sos-monde-v1';
const ASSETS=[
  'index.html',
  'assets/css/styles.css',
  'assets/js/app.js',
  'assets/js/i18n.js',
  'assets/js/emergency.js',
  'assets/js/country-flags.js',
  'assets/img/icon-192.png',
  'assets/img/icon-512.png',
  'manifest.json'
];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE && caches.delete(k))))); });
self.addEventListener('fetch',e=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))); });
