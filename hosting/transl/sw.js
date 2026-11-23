const CACHE = "screen-translator-v21";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./firebase-config.js",
  "./manifest.json",
  "./icon.svg",
  "./vendor/tesseract.min.js",
  "./vendor/worker.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Réseau d'abord (pour recevoir les mises à jour), cache en secours (hors-ligne)
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html")))
  );
});

