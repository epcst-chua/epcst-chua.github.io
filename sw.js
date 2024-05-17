if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceworker.js");

  const urlsToCache = [
    "/",
    "/images/icon-192.png", "/images/icon-512-maskable.png", "icon-512.png", "favicon.ico", "apple-touch-icon.png"
  ];

  // This code executes in its own worker or thread
  self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("pwa-assets").then(cache => {
        return cache.addAll(urlsToCache);
      })
    );
  });

  self.addEventListener("activate", event => {
    console.log("Service worker activated");
  });
}