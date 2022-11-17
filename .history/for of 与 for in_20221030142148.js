// for in
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
    console.log(typeof index); // 0 1 2
}

