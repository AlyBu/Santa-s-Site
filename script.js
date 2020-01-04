window.onload = function () {
    openAnimation();

// Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

}

function openAnimation() {
    setTimeout(function () {
            let topPresent = document.getElementsByClassName('top').item(0);
            topPresent.style.display = 'none';
        }
        , 3000);

    setTimeout(function () {
        let boxPresent = document.getElementsByClassName('box').item(0);
        boxPresent.style.display = 'none';
    }, 6100);

    setTimeout(function () {
        document.body.style.overflow = 'unset';

        let openPg = document.getElementsByClassName('open-page').item(0);
        openPg.style.display = 'inline-block';

        let secPg = document.getElementsByClassName('second-page').item(0);
        secPg.style.display = 'inline-block';

        let thirdPg = document.getElementsByClassName('third-page').item(0);
        thirdPg.style.display = 'inline-block';
    }, 6200);

}

var bottom = 0;
var left = 125;

window.onscroll = function () {
    moveSleigh()
};

function moveSleigh() {
    let secondPg = document.getElementsByClassName('second-page').item(0);
    if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
        if(bottom < window.innerHeight && left < window.innerWidth) {
            bottom = bottom + 5;
            left = left + 10;
            document.getElementsByClassName("sleigh").item(0).style.bottom = bottom + 'px';
            document.getElementsByClassName("sleigh").item(0).style.left = left + 'px';
        } else {
            bottom = -20;
            left = 100;
        }
    }
}

function sendList() {

    let boxPresent = document.getElementsByClassName('box').item(0);
    boxPresent.style.display = 'block';
    boxPresent.style.animation = 'none';

    document.body.style.overflow = 'hidden';

    let openPag = document.getElementsByClassName('open-page').item(0);
    openPag.style.display = 'none';

    let secPag = document.getElementsByClassName('second-page').item(0);
    secPag.style.display = 'none';

    let thirdPag = document.getElementsByClassName('third-page').item(0);
    thirdPag.style.display = 'none';
}