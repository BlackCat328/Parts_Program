class Vue {
    constructor(obj_instance) {
        this.$data = obj_instance.data;
        Observer(this.$data);
    }
}

//数据劫持 - 监听实例里的数据
function Observer(data_instance) {
    Object.keys(data_instance).forEach(key => {
        let value = data_instance[key]
        //di'gui
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