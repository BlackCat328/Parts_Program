function coloring() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}

function throttle(func, delay) {
    let pre = 0;
    return function () {
        let now = new Date()
        if (now - pre > delay) {
            func()
            pre = now
        }
    }
}

window.addEventListener('resize', throttle(coloring, 1000))