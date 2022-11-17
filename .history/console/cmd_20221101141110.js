// 1. 打印调试信息
console.debug('debug info!');

// 2. 打印消息
// 2.1 普通消息
console.log('log info!');

// 2.2 信息
console.info('info!');

// 2.3 表格
console.table([
    {
        name: 'Tom',
        age: 15
    },
    {
        name: 'Bob',
        age: 17,
        sex: '男'
    },
    {
        name: 'Henry',
        age: 13,
        sex: '女'
    },
    {
        name: 'Jack',
        age: 23,
        birthday: '990328'
    },
    {
        name: 'Sham',
        age: 19,
        birthday: '200512'
    },
    {
        name: 'Bobo',
        age: 12,
        class: 3
    },
]);

// 2.4 分组
const label = 'Package elephant!';
console.group(label); //这个打印出来默认分组是打开状态
// console.groupCollapsed(label); //这个打印出来默认分组是折叠状态
console.log('Open box');
console.log('Put elephent in');
console.log('Close box');
console.groupEnd(label);

// 2.5 对象结构
console.log(document.body); //做对比
console.dir(document.body);

// 2.6 计时
console.time('loop1');
const start1 = Date.now();
while (Date.now() - start1 < 2000) { };
console.timeEnd('loop1');

// 2.7 计数
const start2 = Date.now()
while (Date.now() - start2 < 20) {
    console.count('loop2');
}
console.countReset('loop2')

// 2.8 堆栈
function b() {
    console.trace();
}
function a() {
    b()
}
a()

// 2.9 断言
function sum(a, b) {
    return a + b
}
console.assert(sum(1, 2) === 4)

// 3. 打印警告
console.warn('Abandon Hope All Ye Who Enter')

// 4. 打印错误
console.error('')