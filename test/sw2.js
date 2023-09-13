globalThis.addEventListener("install", (event) => {
  skipWaiting();
});

globalThis.addEventListener("activate", (event) => {
  clients.claim();
});

globalThis.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (url.pathname === "/fake-api") {
    event.respondWith(new Response("fake-api2"));
  }
});
