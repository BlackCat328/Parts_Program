class Vue {
    constructor(obj_instance) {
        this.$data = obj_instance.data;
        Observer(this.$data);
    }
}

//数据劫持 - 监听实例里的数据
function Observer(data_instance) {

    if()

    Object.keys(data_instance).forEach(key => {
        let value = data_instance[key]
        //递归 - 子属性数据劫持
        Observer(value)
        Object.defineProperty(data_instance, key, {
            enumerable: true,
            configurable: true,
            get() {
                console.log(`访问了属性：${key} -> 值：${value}`);
                return value;
            },
            set(newValue) {
                console.log(`属性${key}的值${value}修改为 -> ${newValue}`);
                value = newValue
            }
        });
    });
}