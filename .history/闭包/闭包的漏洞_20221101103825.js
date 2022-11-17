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

o.get
console.log(o.get('a'));