function coloring() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}

function throttle(func, delay) {
    let now;
    return function () {
        let now = new Date
    }
}

window.addEventListener('resize', throttle(coloring, 1000))