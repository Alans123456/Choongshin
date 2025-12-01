// Empty service worker to avoid 404
self.addEventListener('install', () => {
  self.skipWaiting();
});
