
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

// 方法8： for + splice
function newArrFn8(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
                j--
            }
        }
    }
    return arr
}
console.log('第八种：' + newArrFn8(arr))

// 方法9： Map
function newArrFn9(arr) {
    let newArr = []
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        // 如果 map里面不包含，就设置进去
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log('第九种：' + newArrFn9(arr))

// 方法10： reduce
function newArrFn10(arr) {
    let newArr = []
    return arr.reduce((prev, next, index, arr) => {
        // 如果包含，就返回原数据，不包含，就把新数据追加进去 
        newArr.includes(next) ? newArr : newArr.push(next)
        return newArr
    }, 0)
}
console.log('第十种：' + newArrFn10(arr))
