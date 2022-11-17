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
        //bu'ke
        if (!this instanceof Example) {
            throw new TypeError(
                'a.func is not a constructor'
            )
        }
        console.log(this.name);
    },
    enumerable: false,
})

