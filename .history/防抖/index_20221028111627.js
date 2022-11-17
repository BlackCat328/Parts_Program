const button = document.querySelector('button')

function good() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~666');
}

function debounce(func) {
    return function () {
        func()
    }
}

button.addEventListener('click', debounce(good)) 