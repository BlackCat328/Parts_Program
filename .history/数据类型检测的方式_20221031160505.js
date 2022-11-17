// 1.typeof

// 2.instance of

// 3.constructer

// 4.Object.prototype.toString.call()
var a = Object.prototype.toString
console.log(a.call('str'));
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call([]));
console.log(a.call([]));