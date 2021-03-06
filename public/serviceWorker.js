
const cacheName = 'version-20';

// Cache Application in Cache Storage
self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('1. Install: Cached App Data.');
            return cache.addAll([
                "./",
                "./about.html",
                "src/styles.css",
                "images/fill1.png",
                "images/fill2.png",
                "images/background.png",
                "images/logo192.png",
                "images/logo512.png",
                "src/index.js"
            ])
        })
    )
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
        .then(keys => {
            console.log('3. new cache activated, old one deleted, ready to refresh');
            return Promise.all(keys
               .filter(key => key != cacheName)
               .map(key => caches.delete(key)) 
            )
        })
    )
})

// Retrieve Cached Items
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(response => {
            console.log('2. Cached Items Fetched!');
            return response || fetch(e.request);
        })
        .catch(error => console.log('Unable to fetch cached items!', error))
    )
});
