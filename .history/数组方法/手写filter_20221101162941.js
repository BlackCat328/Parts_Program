let arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myfilter = function (fn, thisArg) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw ('fn is not a function!')
    }

    let resAry = []
    let currentAry = this
    for (let i = 0; i < currentAry.length; i++) {
        fn.call(thisArg, currentAry[i], i, currentAry) && resAry.push(currentAry[i])
    }

    return resAry
}

let _filter = arr.myfilter((item,) => {
    return item > 3
})

console.log(_filter);