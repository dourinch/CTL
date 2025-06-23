self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("credencial-store").then(function (cache) {
      return cache.addAll([
        "/CTL/index.html",
        "/CTL/style.css",
        "/CTL/manifest.json",
        "/CTL/1.png",
        "/CTL/logo.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
