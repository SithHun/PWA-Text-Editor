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
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the browser's installation prompt
        deferredPrompt.prompt();
    
        // Wait for the user to respond to the prompt
        const choiceResult = await deferredPrompt.userChoice;
    
        if (choiceResult.outcome === 'accepted') {
          console.log('PWA installation accepted by the user.');
        } else {
          console.log('PWA installation rejected by the user.');
        }
    
        deferredPrompt = null; // Reset the deferredPrompt variable
        butInstall.style.display = 'none'; // Hide the install button after the prompt is shown
      }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed successfully.', event);
});
