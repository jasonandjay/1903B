import Dep from './dep.js';

class Observe{
    constructor(data){
        this.dep = new Dep();
        this.reactive(data);
    }

    reactive(data){
        for (let key in data){
            this.defineReactive(data, key, data[key]);
            if (typeof data[key] === 'object' && data[key] !== null){
                this.reactive(data[key]);
            }
        }
    }

    defineReactive(data, key ,value){
        let that = this;

        Object.defineProperty(data, key, {
            get(){
                // 依赖收集
                if (Dep.target){
                    that.dep.addSub(Dep.target);
                }
                console.log(`获取${(data)}上面的属性${key}，它的值是${value}`)
                return value;
            },
            set(newValue){
                console.log(`设置${(data)}上面的属性${key}，它的值是${newValue}`)
                value = newValue;
                // 依赖更新发布
                that.dep.notify();
            }
        })
    }
}

export default Observe;