function Car() {
    this.make = '兰博基尼'
    console.log('======', this);
    return {
        make: '鸡你太美'
    }
}

const myCar = new Car()
console.log('=======================', myCar.);   
console.log('=======================', this, myCar.make);   