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

 var arr = [1,2,3]
 Array.prototype.a = 123
     
 for (let index in arr) {
   let res = arr[index]
   console.log(res)
 }
 //1 2 3 123
 
 for(let index in arr) {
     if(arr.hasOwnProperty(index)){
         let res = arr[index]
           console.log(res)
     }
 }
 // 1 2 3
 
 作者：灰灰呀_
 链接：https://juejin.cn/post/6916058482231754765
 来源：稀土掘金
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

