// Minimal Service Worker for Carnet de Fouille
// Purpose: satisfy Chrome Android's PWA installability criteria so the app
// gets a proper WebAPK (no browser badge on the home screen icon).
// This SW does not cache anything — the app relies on GitHub for all data.

const CACHE_NAME = 'carnet-fouille-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Pass-through fetch handler — no caching, just let requests go through normally.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
