// sw.js — без кэша, только для установки PWA
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Просто идём в сеть, ничего не кэшируем
  event.respondWith(fetch(event.request));
});