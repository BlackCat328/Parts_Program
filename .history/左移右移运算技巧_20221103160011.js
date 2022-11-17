/**
 * 左移运算符 <<
 * 右移运算符 >>
 *      1.可以将字符串number 转换成 number基础类型
 *      2.可以将Boolean值 转换成 number基础类型
 *          1) true 转换成 1
 *          2) false 转换成 0
 */

//字符串转换
let num = '10001'
let num1 = 'wqeqwe'
console.log(num << 0);
console.log(num >> 0);
let int1 = num << 0
let int2 = num >> 0
console.log(typeof int1);
console.log(typeof int2);

//布尔值转换
console.log(true << 0);
console.log(true >> 0);
console.log(true >> 0 === true << 0);
console.log(false << 0);
console.log(false >> 0);
console.log(false >> 0 === false << 0);