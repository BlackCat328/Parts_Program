/**
 * 从 x -> y ,数据是否发生变化
 */

function hasChanged(x, y) {
    if (x === y) {
        return x === 0 && 1 / x !== 1 / y
    } else {
        return x === x || y === y
    }
}

/**
 * x = +0 与 y = -0 的时候
 */
console.log(+0 === -0);
console.log(1 / +0 === 1 / -0); // 1/+0 = Infinity  1/-0
console.log(hasChanged(+0, -0));