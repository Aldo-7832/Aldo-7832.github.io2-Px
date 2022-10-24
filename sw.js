const STATIC_CACHE_NAME = 'static-cache-v1.1';
const INMUTABLE_CACHE_NAME = 'inmutable-cache-v1.1';
const DYNAMIC_CAHCE_NAME = 'dynamic-cache-v1.1';

self.addEventListener('install', (event)=>{
    console.log('SW: Instalado');
    const respCache = caches.open('cache-app-shell').then((cache)=>{
        return cache.addAll([
            '/',
            '/index.html',
            '/images/icons/android-launchericon-48-48.png',
            '/images/icons/android-launchericon-72-72.png',
            '/images/icons/android-launchericon-96-96.png',
            '/images/icons/android-launchericon-144-144.png',
            '/images/icons/android-launchericon-192-192.png',
            '/images/icons/android-launchericon-512-512.png',
            '/manifest.json',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
            'https://th.bing.com/th/id/R.3e8d38dcf0fa39bc91dd527dcd118005?rik=1SYxbzOgsxiGPw&riu=http%3a%2f%2fpixelartmaker.com%2fart%2fbf7783f05b3ef95.png&ehk=DY10ERXuLQQPTw2L0yl2xUsA8xK0FWs6dGscH3RxEPg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.woff2'
        ]);
    });
    event.waitUntil(respCache);
});

//only cache
self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);
    let resp = null;
    resp = caches.match(event.request);
    event.respondWith(resp);
});