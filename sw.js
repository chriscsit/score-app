// sw.js
self.addEventListener('push', e => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/icon.png', // Add a path to your app's icon
        vibrate: [200, 100, 200]
    });
});
