if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js')
        .then(function() {
            console.log("It succeeded!");
        }).catch(function() {
            console.log("It failed!");
        });
}
