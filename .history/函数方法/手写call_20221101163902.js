function person() {
    console.log(this.name);
}

var egg = {
    name: '魏先生'
}

Function.prototype.myCall = function (obj) {
    console.log(this);
}

person.