(function (params) {
    return params.get()
}, ({
    name: 'tom',
    age: 12,
    get() {
        return this.name
    }
})())