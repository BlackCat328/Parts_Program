//ES6之前 实参与形参是有ying'she
function args(a, b) {
    console.log(a, b);
    console.log(arguments[0], arguments[1]);
}

args(1, 2);