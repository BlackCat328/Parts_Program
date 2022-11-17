let arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myMap = function (fn, thisArg) {
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

let err = arr.myMap(123)

console.log(_map);
console.log(_map);