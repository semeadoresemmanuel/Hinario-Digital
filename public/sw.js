const CACHE_NAME = 'hinario-v1.1.0';

// Recursos essenciais do shell do aplicativo para pré-cache
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
    const url = new URL(request.url);

    // 1. Arquivos de Áudio (songs/*.mp3): Suporte offline completo com Range Requests (HTTP 206)
    if (url.pathname.includes('/songs/') || url.pathname.includes('/Musics/') || url.pathname.endsWith('.mp3')) {
        event.respondWith(handleAudioRequest(request));
        return;
    }

    // 2. Navegação de páginas HTML: Network-First com fallback para Cache
    if (request.mode === 'navigate') {
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

    // 3. Requisições internas do Vite em desenvolvimento: sempre rede primeiro
    if (request.url.includes('/@vite/') || request.url.includes('/@fs/') || request.url.includes('?direct')) {
        event.respondWith(
            fetch(request).catch(() => caches.match(request))
        );
        return;
    }

    // 4. Recursos estáticos (JS, CSS, Fontes, Imagens, SVGs): Stale-While-Revalidate com auto-cache
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
                .catch(() => cachedResponse);

            return cachedResponse || fetchPromise;
        })
    );
});

/**
 * Gerenciador de requisições de áudio com suporte a HTTP 206 (Partial Content) para offline.
 */
async function handleAudioRequest(request) {
    const cache = await caches.open(CACHE_NAME);
    const rangeHeader = request.headers.get('range');
    const cleanUrl = request.url;

    // Tenta encontrar o áudio completo armazenado no cache
    let cachedResponse = await cache.match(cleanUrl);

    // Se estiver online e não estiver em cache, faz o download do arquivo completo (status 200) para armazenar
    if (!cachedResponse && navigator.onLine) {
        try {
            const fullResponse = await fetch(cleanUrl);
            if (fullResponse && fullResponse.status === 200) {
                await cache.put(cleanUrl, fullResponse.clone());
                cachedResponse = fullResponse;
            }
        } catch (e) {
            // Em caso de falha de rede
        }
    }

    // Se não temos a resposta em cache e estamos online, repassa a requisição original
    if (!cachedResponse) {
        return fetch(request);
    }

    // Se o player não enviou cabeçalho Range, retorna o áudio completo (status 200)
    if (!rangeHeader) {
        return cachedResponse;
    }

    // Processa Range Request para o áudio em cache (HTTP 206 Partial Content)
    try {
        const arrayBuffer = await cachedResponse.arrayBuffer();
        const total = arrayBuffer.byteLength;
        const parts = rangeHeader.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10) || 0;
        const end = parts[1] ? parseInt(parts[1], 10) : total - 1;

        if (start >= total || end >= total) {
            return new Response('', {
                status: 416,
                statusText: 'Range Not Satisfiable',
                headers: { 'Content-Range': `bytes */${total}` }
            });
        }

        const sliced = arrayBuffer.slice(start, end + 1);
        return new Response(sliced, {
            status: 206,
            statusText: 'Partial Content',
            headers: {
                'Content-Type': cachedResponse.headers.get('Content-Type') || 'audio/mpeg',
                'Content-Range': `bytes ${start}-${end}/${total}`,
                'Content-Length': String(sliced.byteLength),
                'Accept-Ranges': 'bytes'
            }
        });
    } catch (err) {
        return cachedResponse;
    }
}
