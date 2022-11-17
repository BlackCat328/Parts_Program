(function (params) {
    return params
}, ({
    name: 'tom',
    age: 12,
    get() {
        return this.name
    }
}))