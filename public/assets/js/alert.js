/**
 * Created by Florin on 5/23/2017.
 */

setTimeout(function(){notifyMe()}, 1800);



function notifyMe() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('Cutremur în Vrancea', {
            icon: "/assets/images/logo.png",
            body: "Adâncime: 80km " + '\n'+
            "Distanță:302km " +'\n'+
            "Unda ajunge în 53 secunde " +'\n'+
            "Magnitudine: 4.3 grade! ",
        });

        notification.onclick = function () {
            window.open("#");
        };

    }

    document.getElementById('Accident').play();


}

