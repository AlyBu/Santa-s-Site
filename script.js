window.onload = function () {
    openAnimation();
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


