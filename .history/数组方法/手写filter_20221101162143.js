let arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myfil = function (fn, thisArg) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw ('fn is not a function!')
    }

    let resAry = []
    let currentAry = this
    for (let i = 0; i < currentAry.length; i++) {
        resAry[i] = fn.call(thisArg, currentAry[i], i, currentAry)
    }

    return resAry
}

let _map = arr.myMap((item, index) => {
    return item + index
})

console.log(_map);