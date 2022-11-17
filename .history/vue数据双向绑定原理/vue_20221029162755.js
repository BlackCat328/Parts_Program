class Vue {
    constructor(obj_instance) {
        this.$data = obj_instance.data;
        Observer(this.$data);
    }
}

//数据劫持 - 监听实例里的数据
function Observer(data_instance) {
    Object.keys(data_instance).forEach(key => {
        let 
        Object.defineProperty(data_instance, key, {
            enumerable: true,
            configurable: true,
            get() {

            },
            set() {

            }
        });
    });
}