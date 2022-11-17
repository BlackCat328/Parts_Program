var arr = [1, [2, 3, [4, 5, 6]]]
//数组扁平化
//方法1：普通递归
const flatten1 = arr => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        //判断是否为一个数组，如果是则递归连接数组，不是直接push
        if (Array.isArray(arr[i])) result = result.concat(flatten1(arr[i]))
        else result.push(arr[i])
    }
    return result
}
console.log('~~~~~1~~~~~'+flatten1(arr))

//方法2：利用 reduce 函数迭代
const flatten2 = arr => {
    return arr.reduce((pre, next) => {
        return pre.concat(Array.isArray(next) ? flatten2(next) : next)
    }, [])
}
console.log('~~~~~2~~~~~'+flatten2(arr))

//方法3：扩展运算符实现
const flatten3 = arr => {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log('~~~~~3~~~~~'+flatten3(arr))