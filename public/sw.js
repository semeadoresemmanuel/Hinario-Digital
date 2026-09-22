const CACHE_NAME = 'hinario-v1.0.2';

// Recursos essenciais do shell do aplicativo
const PRECACHE_URLS = [
    './',
    './index.html',
    './manifest.json',
    './favicon.svg',
    './icon-192.png',
    './icon-512.png'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return Promise.allSettled(
                PRECACHE_URLS.map(url => cache.add(url).catch(err => {
                    console.warn('Falha no pré-cache:', url, err);
                }))
            );
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (!event.request.url.startsWith('http') || event.request.method !== 'GET') return;

    const request = event.request;
    const isNavigation = request.mode === 'navigate';

    // 1. Navegação de páginas HTML: Network-First com fallback para Cache
    if (isNavigation) {
        event.respondWith(
            fetch(request)
                .then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    return caches.match(request)
                        .then(cached => cached || caches.match('./') || caches.match('./index.html'));
                })
        );
        return;
    }

    // 2. Requisições internas do Vite em desenvolvimento: sempre rede primeiro
    if (request.url.includes('/@vite/') || request.url.includes('/@fs/') || request.url.includes('?direct')) {
        event.respondWith(
            fetch(request).catch(() => caches.match(request))
        );
        return;
    }

    // 3. Demais recursos (JS, CSS, Fontes, Imagens, SVGs): Cache-First / Stale-While-Revalidate com auto-cache
    event.respondWith(
        caches.match(request).then(cachedResponse => {
            const fetchPromise = fetch(request)
                .then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    return cachedResponse;
                });

            // Retorna do cache se já existir (velocidade instantânea / offline) ou aguarda o fetch
            return cachedResponse || fetchPromise;
        })
    );
});
