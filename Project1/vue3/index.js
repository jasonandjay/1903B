const handle = {
    get(target, key){
        // 收集依赖
        track(target, key);
        let value =  Reflect.get(target, key);
        return typeof value === 'object'?reactive(value) : value;
    },
    set(target, key, value){
        console.log('target...', target, key, value);
        let result = Reflect.set(target, key, value);
        trigger(target, key);
        return result;
    }
}


export function reactive(obj){
    return new Proxy(obj, handle);
}

// 在依赖收集过程，存储effect
const effectList = [];
// 存储所有数据订阅的effect
/**
 * effectWeakMap{
 *   target: new Map({
 *      key: new Set()
 *   })
 * }
 */
const effectWeakMap = new WeakMap();
// 依赖收集过程
function track(target, key) {
    // 拿到当前栈顶的effect
    let effect = effectList[effectList.length - 1];

    let targetMap = effectWeakMap.get(target);
    if (!targetMap) {
        targetMap = new Map();
        effectWeakMap.set(target, targetMap);
    }
    let keySet = targetMap.get(key);
    if (!keySet) {
        keySet = new Set();
        targetMap.set(key, keySet);
    }
    if (effect){
        keySet.add(effect);
    }
}

// 依赖通知
function trigger(target, key){
    let targetMap = effectWeakMap.get(target);
    if (!targetMap) {
        return;
    }
    let keySet = targetMap.get(key);
    if (!keySet) {
        return;
    }
    keySet.forEach(effect=>effect());
}



export function computed(){

} 

export function effect(fn, options = {}){
    let reactivEffect = createReactiveEffect(fn, options);
    reactivEffect();
    return reactivEffect;
}

function createReactiveEffect(fn){
    let reactivEffect = function(...args){
        run(fn, args);
    }
    return reactivEffect;
}

function run(fn, args){
    try{
        effectList.push(fn);
        fn(args);
    }finally{
        effectList.pop();
    }
}