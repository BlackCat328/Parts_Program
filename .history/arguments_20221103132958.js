//ES6之前 实参与形参是有映射关系的(没给形参默认值)
function args1(a, b) {
    console.log(a, b);
    console.log(arguments[0], arguments[1]);
}

args1(1, 2);

//ES6之后 一旦给了形参默认值,实参与形参就没有映射关系了
function args2(a, b) {
    console.log(a, b);
    console.log(arguments[0], arguments[1]);
}

args2(1, 2);