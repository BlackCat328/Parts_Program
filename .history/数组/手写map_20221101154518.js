let arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myMap = function (fn, thisArgs) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw ('fn is not a function!')
    }

    let resAry = []
    let currentAry = this
    for (let i = 0; i < currentAry.length; i++) {
        fn.call(thisArgs,currentAry[i],i)
    }
}