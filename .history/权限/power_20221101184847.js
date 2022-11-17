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
//如：可新增 + 可删除，这种类型就直接进行或运算
const result1 = CREATE | DELETE;
const result2 = CREATE | DELETE | UPDATE;
console.log(result1.toString(2));
console.log(result2.toString(2));

//判定是否有此权限，用且运算
//拿到一个权限为 power
const power1 = 0b1011
const power2 = DETAIL | DELETE |0b0001
console((power & CREATE) === CREATE)

