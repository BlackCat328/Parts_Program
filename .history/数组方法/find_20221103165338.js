const arr = [1, 43, 56, 133, 435]
let result = arr.find((item, index, arr) => {
    console.log(item)
    return item > 500
}, arr)