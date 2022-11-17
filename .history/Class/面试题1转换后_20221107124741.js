'use strict';

function Example(name) {
    
    this.name = name
}

Example.prototype.func = function () {
    console.log(this.name);
}
