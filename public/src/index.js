
// Register service worker if available in browser
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("../serviceWorker.js")
    .then(registration => {
        console.log('Service Worker Registered!', registration);
    })
    .catch(error => console.log('Unable to register Service Worker!', error));
} else {
    console.log('Browser does not support PWA');
}