import Dep from "./dep.js";

class Watch{
    constructor(vm, exp, callback){
        this.vm = vm;
        this.exp = exp;
        this.callback = callback;
        Dep.target = this;
        this.getVal();
        Dep.target = null;
    }

    getVal(){
        return this.vm[this.exp];
    }

    update(){
        let newValue = this.getVal();
        this.callback(newValue);
    }
}

export default Watch;