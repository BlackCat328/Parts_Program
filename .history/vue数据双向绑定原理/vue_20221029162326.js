class Vue {
    constructor(obj_instance) {
        this.$data = obj_instance.data;
        Observer(this.$data);
    }
}

//数据劫持 - 监听实例
function Observer(data_instance) {
    
}