const a = { name: 'yill', age: 13 }
a.name = 'tom' // 这种方式可改
// a = { name: 'tom', age: 12 } // 这种方式不能改
console.log(a)

/* 
    const不能变的是指针指向的内存地址不能变
    至于地址里面存储的数据结构neng
*/