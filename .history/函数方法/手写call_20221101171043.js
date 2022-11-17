function person(a, b, c) {
    console.log(this.name);
    console.log(a, b, c);
}
person.prototype.swim = '游泳';

var egg = {
    name: '魏先生'
}

//手写call
Function.prototype.myCall = function (obj) {
    var obj = obj || window
    /**
     * this指向：function person() {
     *              console.log(this.name);
     *          }
     */
    obj.p = this;
    var newArguments = []
    for (let i = 1; i < arguments.length; i++) {
        newArguments.push('arguments[' + i + ']')
    }
    let result = eval('obj.p(' + newArguments + ')');
    delete obj.p;
    return result;
}

person.myCall(egg, '666', '777', '888')

//手写apply
Function.prototype.myApply = function (obj, arr) {
    var obj = obj || window, result;
    obj.p = this;
    if (!Array.isArray(arr)) {
        result = obj.p()
    } else {
        var newArguments = []
        for (let i = 0; i < arr.length; i++) {
            newArguments.push('arr[' + i + ']')
        }
        result = eval('obj.p(' + newArguments + ')');
    }
    delete obj.p;
    return result;
}

person.myApply(egg, ['魏', '刘', '祝'])

//手写bind
Function.prototype.myBind = function (obj) {
    var that = this,
        arr = Array.prototype.slice.call(arguments, 1),
        newFunc = function () {
            var arr2 = Array.prototype.slice.call(arguments),
                arrSum = arr.concat(arr2);
            if (this instanceof newFunc) that.apply(this, arrSum)
            else that.apply(obj, arrSum)
        };
    newFunc.prototype = that.prototype
    return newFunc;
}

var bibi = person.newBind(egg, '蔡文姬', '王昭君');
var b = new bibi('刘备')

person.myBind(egg, '蔡文姬', '王昭君')('刘备')

console.log(b.s);