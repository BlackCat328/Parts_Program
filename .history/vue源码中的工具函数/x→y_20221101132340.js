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
 * x = +0 与 y = -0
 */