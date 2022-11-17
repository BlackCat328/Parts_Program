const button = document.querySelector('button')

function good() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~666');
}

function debounce(fn) {
    fn()
}

button.addEventListener('click', debounce(good)) 