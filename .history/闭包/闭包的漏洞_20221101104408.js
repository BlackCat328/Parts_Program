var o = (function () {
    var obj = {
        a: 1,
        b: 2
    }
    return {
        get: function (k) {
            return obj[k];
        }
    }
})()

Object.defineProperty()

console.log(o.get('valueOf'));