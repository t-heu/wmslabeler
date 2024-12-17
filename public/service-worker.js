import { precacheAndRoute } from 'workbox-precaching';

// Essa linha vai ser preenchida automaticamente com os arquivos a serem armazenados no cache
precacheAndRoute(self.__WB_MANIFEST);

/* eslint-env browser */
const CACHE_NAME = 'd24m06y22.v1';

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([
        '/',
        '/download.xlsx',
      ]),
    ),
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          if (cacheName.indexOf(CACHE_NAME) !== 0) {
            caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(cachedResponse => cachedResponse || fetch(event.request)),
  );
});