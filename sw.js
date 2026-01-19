self.addEventListener('install', e => {
  e.waitUntil(caches.open('gym-app').then(cache => cache.add([
    'index.html',
    'manifest.json'
  ])));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
