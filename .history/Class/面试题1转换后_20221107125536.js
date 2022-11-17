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
        //不可通过 new 调用
        if (!this instanceof Example) {
            console.log(this);
            throw new TypeError(
                'xxx.func is not a constructor'
            );
        }
        console.log(this.name);
    },
    enumerable: false,
})

var a = new Example('aaa')
