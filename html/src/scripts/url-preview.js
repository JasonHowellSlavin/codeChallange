$( document ).ready(function() {

    console.log('ready');

    let keypressTimeout;
    console.log(keypressTimeout);

    function typingCheck () {
        if (keypressTimeout !== undefined ) {
            clearTimeout(keypressTimeout);
            keypressTimeout = setTimeout(searchForURL, 2000);
        } else {
            keypressTimeout = setTimeout(searchForURL, 2000);
        }
    }

    function searchForURL () {
        console.log('lets find that url!');
    }

    function checkInputValue (elem) {
        let urlStart = 'www.';
        let myValue = $(elem).val();

        if (typeof myValue === 'string') {
            console.log('this is a string');
        }
        ;
        let myURL = myValue.match(/.www*/);
        console.log(myURL);
    }

    $('.input-container input').on('keypress', (event)=> {
        typingCheck();
        checkInputValue(event.target);
    });

});