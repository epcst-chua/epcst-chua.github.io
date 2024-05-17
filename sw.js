const urlsToCache = [
  "/",
  "images/icon-192.png", "images/icon-512-maskable.png", "images/icon-512.png", "images/favicon.ico", "images/apple-touch-icon.png"
];

// This code executes in its own worker or thread
self.addEventListener("install", (event) => {
  let cacheUrls = async () => {
     const cache = await caches.open("pwa-assets");
     return cache.addAll(urlsToCache);
  };
  event.waitUntil(cacheUrls());
});

self.addEventListener("activate", event => {
  console.log("Service worker activated");
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request));
});