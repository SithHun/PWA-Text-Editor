const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt; // "beforeinstallprompt" event

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default "Add to Home Screen" prompt
    deferredPrompt = event; // Save the event for later use
    butInstall.style.display = 'block'; // Show the install button
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
