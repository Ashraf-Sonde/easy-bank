const btnHamburger = document.querySelector('#btnHamburger');

btnHamburger.addEventListener('click', function() {
    console.log('hambuger menu');

    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    } else {
        btnHamburger.classList.add('open');
    }
    
});