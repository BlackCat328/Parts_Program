'use strict';

function Example(name) {
    if(!this )
    this.name = name
}

Example.prototype.func = function () {
    console.log(this.name);
}
