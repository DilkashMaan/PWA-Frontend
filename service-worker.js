const CACHE_NAME = "deadly-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/landing.html",
    "/products.html",
    "/product.html",
    "/styles.css",     // if you have a CSS file
    "/main.js",        // if you have a JS file
    "/manifest.json",
    "/favicon-192x192.png",
    "/favicon-512x512.png"
];

// Install event - cache app shell
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            return resp || fetch(event.request);
        })
    );
});
