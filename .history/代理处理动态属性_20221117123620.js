// 实现一个 add 满足以下条件
/* const r1 = add[1][2][3] + 5
const r2 = add[10][30] + 50
const r3 = add[100][200][300] + 100
console.log(r1);  // 结果为 11
console.log(r2);  // 结果为 96
console.log(r3);  // 结果为 7 */

// add 利用 proxy 代理实现
const add = new Proxy(
    {
        _store: 0
    },
    {
        get(target, proxy, receiver) {
            console.log(target, proxy);
            if (proxy === Symbol.toPrimitive) {
                return () => {
                    return target._store;
                }
            }
            target._store += +proxy;
            return receiver;
        }
    }
)
const r1 = add[1][2][3] + 5
const r2 = add[10][30] + 50
const r3 = add[100][200][300] + 100
console.log(r1);  // 结果为 11
console.log(r2);  // 结果为 96
console.log(r3);  // 结果为 746