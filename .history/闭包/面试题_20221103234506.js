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


var color = 'red'
