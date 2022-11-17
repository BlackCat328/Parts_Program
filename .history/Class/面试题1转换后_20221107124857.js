'use strict';

function Example(name) {
    //验证
    if (!this instanceof Example) {
        throw new TypeError(
            `Class constructor Example cannot be invoked without 'new'`
        );
    }
    this.name = name;
}

Example.prototype.func = function () {
    console.log(this.name);
}
