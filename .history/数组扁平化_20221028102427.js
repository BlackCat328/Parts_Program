var arr = [1, [2, 3, [4, 5, 6]]]
//数组扁平化
//方法1：普通递归
const flatten = arr => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]))
    }
}
console.log(flatten(arr))