import Observe from './observe.js'
import Compile from './compile.js'

class MVVM{
    constructor(options){
        if (options.data){
            // 代理data内部的属性到实例上
            this._proxy(options.data);
            // 劫持data
            new Observe(options.data);
        }
        // 编译模版
        new Compile(options.el, this);
    }

    // 代理属性
    _proxy(data){
        for (let key in data){
            Object.defineProperty(this, key, {
                get(){
                    return data[key];
                },
                set(value){
                    data[key] = value;
                }
            });
        }
    }
}

export default MVVM;