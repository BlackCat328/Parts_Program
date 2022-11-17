class Vue {
    constructor(obj_instance) {
        this.$data = obj_instance.data;
        Observer(this.$data);
        Compile(obj_instance.el, this);
    }
}

//数据劫持 - 监听实例里的数据
function Observer(data_instance) {

    //设置递归出口
    if (!data_instance || typeof data_instance !== 'object') return;

    //创建
    const dependency = new Dependency();

    Object.keys(data_instance).forEach(key => {
        let value = data_instance[key]

        //递归 - 子属性数据劫持
        Observer(value)

        Object.defineProperty(data_instance, key, {
            enumerable: true,
            configurable: true,
            get() {
                console.log(`访问了属性：${key} -> 值：${value}`);
                //订阅者加入依赖实例的数组
                Dependency.temp 
                return value;
            },
            set(newValue) {
                console.log(`属性${key}的值${value}修改为 -> ${newValue}`);
                value = newValue
                Observer(newValue)
            }
        });
    });

}

//HTML模板解析 - 替换DOM内容
function Compile(element, vm) {
    vm.$el = document.querySelector(element);
    const fragment = document.createDocumentFragment();
    let child;
    while (child = vm.$el.firstChild) {
        fragment.append(child);
    }
    fragment_compile(fragment);
    //替换文档碎片内容
    function fragment_compile(node) {
        const pattern = /\{\{\s*(\S+)\s*\}\}/;
        if (node.nodeType === 3) {
            const xxx = node.nodeValue
            const result_regex = pattern.exec(node.nodeValue);
            if (result_regex) {
                const arr = result_regex[1].split('.');
                const value = arr.reduce((total, current) => total[current], vm.$data)
                node.nodeValue = xxx.replace(pattern, value);

                //创建订阅者
                new Watcher(vm, result_regex[1], newValue => {
                    node.nodeValue = xxx.replace(pattern, newValue);
                })
            }
            return
        }
        node.childNodes.forEach(child => fragment_compile(child));
    }

    vm.$el.appendChild(fragment);
}

//依赖 - 收集和通知订阅者
class Dependency {
    constructor() {
        this.subscribers = [];
    }

    //收集订阅者
    addSub(sub) {
        this.subscribers.push(sub);
    }
    //通知订阅者
    notify() {
        this.subscribers.forEach(sub => sub.update());
    }
}

//订阅者
class Watcher {
    constructor(vm, key, callback) {
        this.vm = vm;
        this.key = key;
        this.callback = callback;
        //临时属性 - 触发getter
        Dependency.temp = this;
        key.split('.').reduce((total, current) => total[current], vm.$data);
    }
    update() {
        this.callback();
    }
}