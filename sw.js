self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache')
        .then(function(cache) {
          return cache.addAll([
            '/',
            '/index.html',
            '/style.css',
            '/mian.js',
            '/icon.png',
            '/manifest.json'
            // 必要なファイルを追加
          ]);
        })
    );
  });
  
  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys()
        .then(function(cacheNames) {
          return Promise.all(
            cacheNames.filter(function(cacheName) {
              // 古いキャッシュを削除する場合は条件を追加
            }).map(function(cacheName) {
              return caches.delete(cacheName);
            })
          );
        })
    );
  });
  
