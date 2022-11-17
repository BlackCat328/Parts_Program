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
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    obj.p();
    delete obj.p;
}

person.myCall(egg)