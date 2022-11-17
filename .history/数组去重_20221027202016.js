
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
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] === arr[i - 1] ? newArr : newArr.push(arr[i])
    }
    return newArr
}
console.log('第三种：' + newArrFn3(arr));

// 方法4： set
function newArrFn4(arr) {
    // .new Set方法，返回是一个类数组，需要结合 ...运算符，转成真实数组
    // return Array.from(new Set(arr))
    return [...new Set(arr)]
}
console.log('第四种：' + newArrFn4(arr))

// 方法5： filter + indexOf
function newArrFn5(arr) {
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item, 0) === index
    })
}
console.log('第五种：' + newArrFn5(arr))

// 方法6： includes
function newArrFn6(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.includes(arr[i]) ? newArr : newArr.push(arr[i])
    };
    return newArr
}
console.log('第六种：' + newArrFn6(arr))

// 方法7： for + object
function newArrFn7(arr) {
    let newArr = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            newArr.push(arr[i])
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return newArr
}
console.log('第七种：' + newArrFn7(arr))

// 方法8： for + object
function newArrFn8(arr) {
    let newArr = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            newArr.push(arr[i])
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return newArr
}
console.log('第七种：' + newArrFn7(arr))