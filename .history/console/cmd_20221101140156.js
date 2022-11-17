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
console.time('loop')
const start = Date.now()
while(Date.now()-start<2000){}
