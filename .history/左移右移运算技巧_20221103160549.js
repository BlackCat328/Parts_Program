/**
 * 左移运算符 <<
 * 右移运算符 >>
 *      1.可以将字符串number 转换成 number基础类型 (如果是带字母杂乱的字符串则转换成0)
 *      2.可以将Boolean值 转换成 number基础类型
 *          1) true 转换成 1
 *          2) false 转换成 0
 */

//字符串转换
let num = '10001'
let num1 = 'wqeqwe'
let num2 = 'true'
let num3 = '234asd123'
let num4 = '为啊实打实123阿斯顿发生sadasd'

console.group(num);
console.log(num << 0);
console.log(num >> 0);
console.groupEnd(num);

console.group(num1);
console.log(num1 << 0);
console.log(num1 >> 0);
console.groupEnd(num1);

console.group(num2);
console.log(num2 << 0);
console.log(num2 >> 0);
console.groupEnd(num2);

console.group(num3);
console.log(num3 << 0);
console.log(num3 >> 0);
console.groupEnd(num3);

console.group(num4);
console.log(num4 << 0);
console.log(num4 >> 0);
console.groupEnd(num4);

const label = '转换出的数据'
let int1 = num << 0
let int2 = num >> 0
console.group(num4);
console.log(typeof int1);
console.log(typeof int2);
console.groupEnd(num4);

//布尔值转换
console.log(true << 0);
console.log(true >> 0);
console.log(true >> 0 === true << 0);
console.log(false << 0);
console.log(false >> 0);
console.log(false >> 0 === false << 0);