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
//如：可新增+可删除,这种类型就直接进行或运算
const result = CREATE | DELETE;
console.log(result.toString(2));
