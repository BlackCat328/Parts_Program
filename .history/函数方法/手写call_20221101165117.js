function person(a, b, c) {
    console.log(this.name);
    console.log(a, b, c);
}

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
Function.prototype.myA = function (obj) {
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