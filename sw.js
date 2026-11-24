/* KR-X FIT recovery worker: retire old cached app versions. */
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.indexOf('kr-x-fit-')===0).map(key=>caches.delete(key)));
  await self.registration.unregister();
  await self.clients.claim();
})()));
