const button = document.querySelector('button')

function good() {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~666');
}

//防抖函数
function debounce(func, delay) {
    let timer
    return function () {
        let that = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(that, args)
        }, delay)
    }
}

button.addEventListener('click', debounce(good, 1000)) 