function test1() {
    return '123'
}

function test2() {
    return {
        name: 'tom',
        age: 12
    }
}
let t1 = new test1()
let t2 = new test2()
console.log(t1);
console.log(t2);

var tmp = new Date();

function fn() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

fn();