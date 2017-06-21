/*
 Created by Florin on 5/18/2017.
 */

var el = document.querySelector('.notification');

function setIntervalX(content, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function() {
        content();
        x++;
        if (x === repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
}

var lung = document.getElementById('drop-list').getElementsByTagName('li').length;


setIntervalX(function() {
    var count = Number(el.getAttribute('data-count')) || 0;
    el.setAttribute('data-count', count + 1);
    el.classList.remove('notify');
    el.offsetWidth = el.offsetWidth; //
    el.classList.add('notify');
    if (count === 0) {
        el.classList.add('show-count');
    }
    var audio = new Audio('/assets/audio/bell.wav');
    audio.play();
}, 1000, lung);