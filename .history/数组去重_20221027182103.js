
var arr = [1, 2, 3, 4, 5, 6, 4, 3, 8, 1]
// 数组去重：
// 方法1： 双重for 循环
function newArrFn1(arr) {
    // 创建一个新的空数组
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        // 设置一个开关，如果是true，就存进去，不是就不存
        let flag = true
        for (let j = 0; j < newArr.length; j++) {
            // 原数组和新数组作比较，如果一致，开关变为 false
            arr[i] === newArr[j] ? flag = false : flag
        };
        flag ? newArr.push(arr[i]) : newArr
    };
    return newArr
}
console.log('第一种：' + newArrFn1(arr))

// 方法2： for + indexof
function newArrFn2(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.indexOf(arr[i]) === -1 ? newArr.push(arr[i]) : newArr
    };
    return newArr
}
console.log('第二种：' + newArrFn2(arr));

// 方法3： for + sort
function newArrFn3(arr) {
    arr = arr.sort()
    
}