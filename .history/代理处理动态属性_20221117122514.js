// 实现一个 add 满足以下条件
/* const r1 = add[1][2][3] + 5
const r2 = add[10][30] + 50
const r3 = add[100][200][300] + 100
console.log(r1);  // 结果为 11
console.log(r2);  // 结果为 90
console.log(r3);  // 结果为 700 */

// add 利用 proxy 代理实现
const add = new Proxy(
    {},
    {
        get(target, proxy, receiver) {
            console.log(target, proxy);
            return receiver
        }
    }
)

console.log(add[2]);