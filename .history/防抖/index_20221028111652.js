const button = document.querySelector('button')

function good() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~666');
}

function debounce(func) {
    return function () {
        setTimeout(()=>{
            func()
        })
    }
}

button.addEventListener('click', debounce(good)) 