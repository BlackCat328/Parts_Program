var arr = [1, [2, 3, [4, 5, 6]]]
//数组扁平化
//方法1：普通递归
const flatten = arr => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        //判断是否为yi'ge'shu'zu
        if (Array.isArray(arr[i])) result = result.concat(flatten(arr[i]))
        else result.push(arr[i])
    }
    return result
}
console.log(flatten(arr))