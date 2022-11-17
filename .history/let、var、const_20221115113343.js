
/* 
    （1）块级作用域：块作用域由 { }包括，let和const具有块级作用域，var不存在块级作用域。块级作用域解决了ES5中的两个问题：
        ● 内层变量可能覆盖外层变量
        ● 用来计数的循环变量泄露为全局变量
    （2）变量提升：var存在变量提升，let和const不存在变量提升，即在变量只能在声明之后使用，否在会报错。
    （3）给全局添加属性：浏览器的全局对象是window，Node的全局对象是global。var声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是let和const不会。
    （4）重复声明：var声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const和let不允许重复声明变量。
    （5）暂时性死区：在使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用var声明的变量不存在暂时性死区。
    （6）初始值设置：在变量声明时，var 和 let 可以不用设置初始值。而const声明变量必须设置初始值。
    （7）指针指向：let和const都是ES6新增的用于创建变量的语法。 let创建的变量是可以更改指针指向（可以重新赋值）。但const声明的变量是不允许改变指针的指向。
*/

const a = { name: 'yill', age: 13 }
a.name = 'tom' // 这种方式可改
// a = { name: 'tom', age: 12 } // 这种方式不能改
a.sex = '男'
delete a.age
console.log(a)

/* 
    const不能变的是指针 指向的内存地址的这个方向 不能变
    至于它指向的数据结构是不是可变的，就完全不能控制了
*/

const b = null
b={name: 'tom', age: 12}