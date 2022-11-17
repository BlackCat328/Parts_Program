var o = (function () {
    var obj = {
        a: 1,
        b: 2
    }
    return {
        get: function (k) {
            return obj[k];
        }
    }
})()

o.define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    
});

console.log(o.get('valueOf'));