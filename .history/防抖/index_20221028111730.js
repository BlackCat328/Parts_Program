const button = document.querySelector('button')

function good() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~666');
}

function debounce(func, delay) {
    return function () {

        let  setTimeout(() => {
            func()
        }, delay)
    }
}

button.addEventListener('click', debounce(good, 1000)) 