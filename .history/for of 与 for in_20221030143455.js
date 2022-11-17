// for in 更适合遍历对象，但也可以遍历数组
var obj = {a:1, b:2, c:3}
    
for (let key in obj) {
  console.log(key); // a b c
}

//for of
const array1 = ['a', 'b', 'c']
//数组用 for of 遍历的是每一项值
for (const val of array1) {
  console.log(val); // a b c
}

//数组用 for in 遍历的是索引值
for(let index in array1){
    console.log(index); // 0 1 2
    console.log(typeof index); // string string string 不能直接进行几何运算
}

/**
 * 使用for in会遍历数组所有的可枚举属性，包括原型，如果不想遍历原型方法和属性的话，
 * 可以在循环内部判断一下，使用hasOwnProperty()方法可以判断某属性是不是该对象的实例属性
 */



