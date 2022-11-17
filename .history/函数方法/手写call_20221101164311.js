function person() {
    console.log(this.name);
}

var egg = {
    name: '魏先生'
}

//手写call
Function.prototype.myCall = function (obj) {
    /**
     * this指向：function person() {
     *              console.log(this.name);
     *          }
     */
    obj.p = this;
    var newArguments = []
    for (let i = 0; i < arguments.length; i++) {
        const element = array[i];

    }
    obj.p();
    delete obj.p;
}

person.myCall(egg)