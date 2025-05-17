self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("car-detector-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.11.0",
        "https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.2",
        "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});