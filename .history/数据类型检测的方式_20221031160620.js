// 1.typeof

// 2.instance of

// 3.constructer

// 4.Object.prototype.toString.call()
/**
 * 同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？
 * 
 */
var a = Object.prototype.toString
console.log(a.call('str'));
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call([]));
console.log(a.call(function () { }));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));