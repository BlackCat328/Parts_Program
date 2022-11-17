function person() {
    console.log(this.name);
}

var egg = {
    name: '魏先生'
}

//手写call
Function.prototype.myCall = function (obj) {
    /
    obj.p = this;
    obj.p();
    delete obj.p;
}

person.myCall(egg)