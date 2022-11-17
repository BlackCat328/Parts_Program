var tmp = new Date();

function fn() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

fn(); //undefined

var tmp1 = 'hello world';

for (var i = 0; i < tmp1.length; i++) {
    console.log(tmp[i]);
}

console.log(i); // 11