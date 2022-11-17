/**
 * 左移运算符 <<
 * 右移运算符 >>
 *      1.可以将字符串number 转换成 number基础类型
 *      2.可以将boole 转换成 number基础类型
 */
let num = '10001'
console.log(num << 0);
console.log(num >> 0);
let int1 = num << 0
let int2 = num >> 0
console.log(typeof int1);
console.log(typeof int2);

console.log(true << 0);