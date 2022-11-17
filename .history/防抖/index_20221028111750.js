const button = document.querySelector('button')

function good() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~666');
}

function debounce(func, delay) {
    let timer
    return function () {
        clearTimeout(timer)
        let timer = setTimeout(() => {
            func()
        }, delay)
    }
}

button.addEventListener('click', debounce(good, 1000)) 