// for in
var obj = {a:1, b:2, c:3}
    
for (let key in obj) {
  console.log(key); // a b c
}

//for of
const array1 = ['a', 'b', 'c']
 
for (const val of array1) {
  console.log(val); // a b c
}

//数组
for(let index in array1){
    console.log(index); // 0 1 2
}

