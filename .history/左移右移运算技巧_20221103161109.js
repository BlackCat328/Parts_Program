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
console.log(`${num}---左移：`, num << 0);
console.log(`${num}---右移：`, num >> 0);
console.groupEnd(num);

console.group(num1);
console.log(`${num1}---左移：`, num1 << 0);
console.log(`${num1}---右移：`, num1 >> 0);
console.groupEnd(num1);

console.group(num2);
console.log(`${num2}---左移：`, num2 << 0);
console.log(`${num2}---右移：`, num2 >> 0);
console.groupEnd(num2);

console.group(num3);
console.log(`${num3}---左移：`, num3 << 0);
console.log(`${num3}---右移：`, num3 >> 0);
console.groupEnd(num3);

console.group(num4);
console.log(`${num4}---左移：`, num4 << 0);
console.log(`${num4}---右移：`, num4 >> 0);
console.groupEnd(num4);

const label = '转换出的数据的类型'
let int1 = num << 0
let int2 = num >> 0
console.group(label);
console.log('右移结果的数据类型：', typeof int1);
console.log('左移结果的数据类型：', typeof int2);
console.log('右移左移结果的数据类型是否相等：', typeof int2 === typeof int1);
console.groupEnd(label);

//布尔值转换
const temp1 = 'true转换'
const temp2 = 'false转换'
console.group(temp1)
console.log('true左移转换：', true << 0);
console.log('true右移转换：', true >> 0);
console.log(true >> 0 === true << 0);
console.groupEnd(temp1)

console.group(temp2)
console.log('true左移转换：', fl << 0);
console.log('true右移转换：', true >> 0);
console.log(false >> 0 === false << 0);
console.group(temp2)