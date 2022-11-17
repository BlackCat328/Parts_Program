function Car() {
    this.make = '兰博基尼'
    console.log();
    return {
        make: '鸡你太美'
    }
}

const myCar = new Car()
console.log('=======================', myCar.make);