// for in 更适合遍历对象，但也可以遍历数组
var obj = { a: 1, b: 2, c: 3 }

for (let key in obj) {
    console.log(key); // a b c
}

//for of
const array1 = ['a', 'b', 'c']
//数组用 for of 遍历的是每一项值
for (const val of array1) {
    console.log(val); // a b c
}

/**
 * for of遍历的是数组元素值，而且for of遍历的只是数组内的元素，不包括原型属性和索引
 * 
 * for of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象（iterator）的集合，
 * 但是不能遍历对象，因为没有迭代器对象，但如果想遍历对象的属性，
 * 你可以用for in循环（这也是它的本职工作）或用内建的Object.keys()方法
 */
var arr = [1, 2, 3]
arr.a = 123
Array.prototype.a = 123

for (let value of arr) {
    console.log(value) //1 2 3
}

var myObject = {
    a: 1,
    b: 2,
    c: 3
}
for (var key of Object.keys(myObject)) {
    console.log(key + ": " + myObject[key]);  //a:1 b:2 c:3
}




//数组用 for in 遍历的是索引值
for (let index in array1) {
    console.log(index); // 0 1 2
    console.log(typeof index); // string string string 不能直接进行几何运算
}

/**
 * 使用for in会遍历数组所有的可枚举属性，包括原型，如果不想遍历原型方法和属性的话，
 * 可以在循环内部判断一下，使用hasOwnProperty()方法可以判断某属性是不是该对象的实例属性
 */

var arr = [1, 2, 3]
Array.prototype.a = 123

for (let index in arr) {
    let res = arr[index]
    console.log(res) //1 2 3 123
}

for (let index in arr) {
    if (arr.hasOwnProperty(index)) {
        let res = arr[index]
        console.log(res) // 1 2 3
    }
}


/**
 *   for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值
 *
 *   for in总是得到对象的key或数组、字符串的下标
 *
 *   for of总是得到数组、字符串的值
 */


// for in 遍历出对象上可枚举的属性

let eObj = {
    a: 1,
    b: 2
}

Object.prototype.c = 3; //可遍历出

Object.defineProperty(Object.prototype, 'd', {
    value: 5,
    writable: true,
    enumerable: false, //可枚举 true可以遍历出来 false遍历不出来
    configurable: true
})

for (let key in eObj) {
    console.log(key);
}

// 属性描述符
var desc = Object.get




