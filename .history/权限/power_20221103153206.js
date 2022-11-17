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

//删除权限 且运算 + 取反
const dele = 0b1011;
//删除可新增权限
const deleCre = dele & (~CREATE)
console.log(deleCre.toString(2))

//判定是否有此权限，用且运算
//拿到一个权限为 power
const power = 0b1011;
// const power3 = CREATE | DELETE | DETAIL;
console.log((power & CREATE) === CREATE)
console.log((power & DELETE) === DELETE)
console.log((power & DETAIL) === DETAIL)
console.log((power & UPDATE) === UPDATE)

