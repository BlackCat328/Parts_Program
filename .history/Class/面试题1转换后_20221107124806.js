'use strict';

function Example(name) {
    if(!this instanceof Element)
    this.name = name
}

Example.prototype.func = function () {
    console.log(this.name);
}
