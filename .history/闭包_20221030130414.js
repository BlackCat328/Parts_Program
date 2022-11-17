
// function init() {
//     var name = "Mozilla"; // name 是一个被 init 创建的局部变量
//     function displayName() { // displayName() 是内部函数，一个闭包
//         console.log(name); // 使用了父函数中声明的变量
//     }
//     displayName();
// }
// init(); // Mozilla

// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// var myFunc = makeFunc();
// myFunc(); // Mozilla

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// var add5 = makeAdder(5); 
// var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12


