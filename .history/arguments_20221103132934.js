//ES6之前 实参与形参是有映射关系的(没给形参默认值)
function args1(a, b) {
    console.log(a, b);
    console.log(arguments[0], arguments[1]);
}

args1(1, 2);

//ES6之后 yi'dan,实参与形参是有映射关系的
function args1(a, b) {
    console.log(a, b);
    console.log(arguments[0], arguments[1]);
}

args1(1, 2);