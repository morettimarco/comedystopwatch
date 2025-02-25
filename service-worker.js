const CACHE_NAME = 'comedy-timer-v1';
const urlsToCache = [
  './',
  './index.html',
  // If you extract CSS/JS to separate files, add them here:
  // './styles.css',
  // './script.js',
  './manifest.json',
  './icon-192x192.png',
   './icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached asset or fetch from network
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  // Optionally, clear out old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
