const CACHE_NAME = 'zhibill-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/statistics.html',
  '/graph.html',
  '/history.html',
  '/index.css',
  '/statistics.css',
  '/graph.css',
  '/history.css',
  '/assets/icon-192.png',
  '/assets/icon-512.png',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});