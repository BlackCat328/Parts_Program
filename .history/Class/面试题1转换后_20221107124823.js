'use strict';

function Example(name) {
    if(!this instanceof Example){
        throw new TypeError
    }
    this.name = name
}

Example.prototype.func = function () {
    console.log(this.name);
}
