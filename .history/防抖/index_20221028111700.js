const button = document.querySelector('button')

function good() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~666');
}

function debounce(func,dela) {
    return function () {
        setTimeout(()=>{
            func()
        })
    }
}

button.addEventListener('click', debounce(good)) 