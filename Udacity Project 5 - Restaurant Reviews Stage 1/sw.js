let staticCacheName = 'restaurant-static-v1';
const urlsToCache = [
    './',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './data/restaurants.json',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './js/register_sw.js',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
];

/** 
 * cache and response
 * */
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            console.log(">> cache and response");
            return cache.addAll(urlsToCache);
        })
    );
});

/*  fetch
 *   1) if there is an entry, respond with an entry from the cache 
 *   2) if there is none, fetch from the network
 */
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            console.log(">> fetch cache");
            if (response) return response;
            return fetch(event.request);
        })
    );
});

/** 
 * update the static cache
 */
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    //cache
                    console.log(">> activate ");
                    return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});