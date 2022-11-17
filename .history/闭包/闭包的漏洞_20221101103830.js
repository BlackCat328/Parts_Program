var o = (function () {
    var obj = {
        a: 1,
        b: 2
    }
    return {
        get: function (k) {
            return obj[k]
        }
    }
})()

o.get('a')=2343
console.log(o.get('a'));