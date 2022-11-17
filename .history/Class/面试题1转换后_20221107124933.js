'use strict';

function Example(name) {
    //验证 this 指向
    if (!this instanceof Example) {
        throw new TypeError(
            `Class constructor Example cannot be invoked without 'new'`
        );
    }
    this.name = name;
}

Object.definePropertie(Example.prototype,'func',{
    va
})

Example.prototype.func = function () {
    console.log(this.name);
}
