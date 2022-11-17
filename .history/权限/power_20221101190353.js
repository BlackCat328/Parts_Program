/**
 * 借助二进制位来表示权限
 */
//可新增
const CREATE = 0b0001
//可删除
const DELETE = 0b0010
//可修改
const UPDATE = 0b0100
//可浏览详情
const DETAIL = 0b1000

//权限组合
//如：可新增 + 可删除，添加权限就直接进行或运算
const result1 = CREATE | DELETE;
const result2 = CREATE | DELETE | UPDATE;
console.log(result1.toString(2));
console.log(result2.toString(2));

//删除权限
const dele1 = 11;
const dele2 = '0b' + power1.toString(2);
//删除可新增权限
const deleC
console.log(dele2);

//判定是否有此权限，用且运算
//拿到一个权限为 power
const power1 = 11;
const power2 = '0b' + power1.toString(2);
console.log(power2);
// const power3 = CREATE | DELETE | DETAIL;
console.log((power2 & CREATE) === CREATE)
console.log((power2 & DELETE) === DELETE)
console.log((power2 & DETAIL) === DETAIL)
console.log((power2 & UPDATE) === UPDATE)

