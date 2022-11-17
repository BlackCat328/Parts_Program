const arr = [1, 43, 56, 133, 435]
let result = arr.find((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr[index])
    return item > 500
}, arr)