if ("Notification" in window) {
    
    if (Notification.permission === 'granted') {
        notify();
    } else {
        Notification.requestPermission().then(() => {
            if (res === 'granted'){
                notify();
            } else if (res === 'denied') {
                console.log("Notifications access denied")
            } else if (res === 'default') {
                console.log("Notifications permission not given")
            }
        })
    }
} else {
    console.error("Notification not supported")
}

function notify() {
    new Notification("Hello",{
        body: `Learn how to use the Notification API`,
        icon: './Sofi.png',
        vibrate: [200,100,200]
    });
}