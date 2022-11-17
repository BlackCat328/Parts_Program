function Car() {
    this.make = '兰博基尼'
    console.log('======', this);
    return {
        // make: this.make
        make: '鸡你太美'
    }
}

const myCar = new Car()
console.log('=======================', new Car());
console.log('=======================', this, myCar.make);


var color = 'red';
var test = {
    color: 'blue',
    getColor: function () {
        var color = 'yellow'
        console.log(this.color);
    }
};

var test111 = test.getColor;
test111();
test.getColor();