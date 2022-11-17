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

Object.defineProperty(Object.prototype, 'aaa', {
    get() {
        return this;
    }
})

console.log(o.get('aaa'));

let a = 