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
console.log('~~~~~1~~~~~：', flatten1(arr))

//方法2：利用 reduce 函数迭代
const flatten2 = arr => {
    // return arr.reduce((pre, next) => {
    //     return pre.concat(Array.isArray(next) ? flatten2(next) : next)
    // }, [])

    return arr.reduce(function (pre, next) {
        return pre.concat(Array.isArray(next) ? arguments.callee(pre, next) : next)
    }, [])
}
console.log('~~~~~2~~~~~：', flatten2(arr))

//方法3：扩展运算符实现
const flatten3 = arr => {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log('~~~~~3~~~~~：', flatten3(arr))

//方法4：split 和 toString 共同处理
const flatten4 = arr => {
    return arr.join().split(',')
}
console.log('~~~~~4~~~~~：', flatten4(arr))

//方法5：调用 ES6 中的 flat
const flatten5 = arr => {
    return arr.flat(Infinity)
}
console.log('~~~~~5~~~~~：', flatten5(arr))

//方法6：正则和 JSON 方法共同处理
const flatten6 = arr => {
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g, '');
    str = `[${str}]`;
    return JSON.parse(str);
}
console.log('~~~~~6~~~~~：', flatten6(arr))