let Parent = {
    name: 'parent',
    friends: ['小黄', '小明', '老王'],
    getName() {
        return this.name
    }
}

let person1 = Object.create(Parent)
person1