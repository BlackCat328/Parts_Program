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

Object.defineProperty(Example.prototype, 'func', {
    value: function () {
        if(!this instanceof Example){
            throw new TypeError(
                
            )
        }
        console.log(this.name);
    },
    enumerable: false,
})

