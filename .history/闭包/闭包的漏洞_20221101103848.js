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

console.log(o.get('value'));