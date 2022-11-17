let Parent = {
    name: 'parent',
    friends: ['小黄', '小明', '老王'],
    getName() {
        return this.name
    }
}

let person1 = Object.create(Parent)
person1.name = 'tom'
person1.friends.push('sham')

let person2 = Object.create(Parent)
person2.name = 'bob'
person2.friends.push('jack')

console.log(person1.name);