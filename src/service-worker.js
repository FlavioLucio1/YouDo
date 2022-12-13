import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

self._precacheManifest = [].concat(self._precacheManifest || []);
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("message", (event) => {
  if (event.data.action == "SKIP_WAITING") self.skipWaiting();
});