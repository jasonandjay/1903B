import Watch from './watch.js';

class Compile{
    constructor(el, $vm){
        this.$vm = $vm;
        // 获取要挂载的节点
        this.$el = el?document.querySelector(el): document.body;
        // 把节点转化成dom碎片编译
        this.$fragment = this.node2Fragment(this.$el);
        // 编辑模版
        this.compile(this.$fragment);
        // 把dom碎片添加到挂载节点后面
        this.$el.appendChild(this.$fragment);
    }  
    // dom节点转化成fragment
    node2Fragment($el){
        let $fragment = document.createDocumentFragment();
        if ($el.firstElementChild){
            $fragment.appendChild($el.firstElementChild);
        }
        return $fragment;
    } 
    // 编译模版
    compile(el){
        let childNodes = el.childNodes;
        const textReg = /([^\{]+)?\{\{(.*)\}\}([^\{]+)?/;
        [...childNodes].forEach(node=>{
            if (node.nodeType === 1){
                this.compileElement(node);
            }else if (node.nodeType === 3){
                console.log('node.textContent', node.textContent);
                if (textReg.test(node.textContent)){
                    compileUtil.compileText(node, this.$vm, RegExp.$1, RegExp.$2, RegExp.$3)
                }
            }
            if (node.childNodes && node.childNodes.length){
                this.compile(node);
            }
        })
    }
    // 处理元素节点
    compileElement(node){
        let attributes = node.attributes;
        [...attributes].forEach(attr=>{
            if (this.isDirective(attr.name)){
                if (this.isEventDirective(attr.name)){
                    compileUtil.compileEventHandle(node, this.$vm, attr.name, attr.value);
                }else{
                    let dir, handleMethod;
                    if (attr.name.includes(':')){
                        dir = attr.name.split(':')[1];
                    }else{
                        dir = attr.name.slice(2);
                    }
                    handleMethod = 'compile'+dir[0].toUpperCase()+dir.slice(1);
                    // console.log('handleMethod...', handleMethod);
                    compileUtil[handleMethod] && compileUtil[handleMethod](node, this.$vm, attr.value);
                }
                node.removeAttribute(attr.name);
            }
        })
    }
    // 属性是否是指令
    isDirective(name){
        return name.includes('v-') || name.includes(':') || name.includes('@');
    }
    // 属性是否是事件
    isEventDirective(name){
        return name.includes('v-on') || name.includes('@');
    }
}

// 编辑工具
const compileUtil = {
    bindReactive(node, vm, exp, type, options){
        let val = this._getVMVal(vm, exp);
        update[type] && update[type](node, val, options);
        // 对使用到的exp添加监听
        new Watch(vm, exp, (newValue) =>{
            update[type](node, newValue, options);
        })
    },
    compileIf(node, vm, exp){
        this.bindReactive(node, vm, exp, 'updateDom')
    },
    compileSrc(node, vm, exp){
        this.bindReactive(node, vm, exp, 'updateAttribute', {attr: 'src'})
    },
    compileText(node, vm, preText, exp, nextText){
        this.bindReactive(node, vm, exp, 'updateText', {preText, nextText});
    },
    compileHtml(node, vm, exp){
        this.bindReactive(node, vm, exp, 'updateHtml');

    },
    compileModel(node, vm, exp){
        if (node.type === 'checkbox' || node.type === 'radio'){
            this.bindReactive(node, vm, exp, 'updateCheck');
            node.addEventListener('change', (e)=>{
                this._setVMVal(vm, exp, e.target.checked)
            })
        }else{
            this.bindReactive(node, vm, exp, 'updateValue');
            node.addEventListener('change', (e)=>{
                this._setVMVal(vm, exp, e.target.value)
            })
        }
    },
    compileEventHandle(node, vm, dir, exp){
        console.log('arguments...', arguments);
        if (dir.includes('@')){
            dir = dir.slice(1);
        }else{
            dir = dir.split(':')[1];
        }
        let fn = vm.$options.methods && vm.$options.methods[exp];

        if (dir && fn){
            node.addEventListener(dir, fn.bind(vm));
        }
    },
    _getVMVal(vm, exp){
        // exp = 'film.src' = this['film']['src'];
        let keys = exp.split('.');
        let val = vm;
        for (let i = 0; i < keys.length; i++){
            val = val[keys[i]];
        }
        return typeof val === 'function'?val.call(vm): val;
    },
    _setVMVal(vm, exp, newValue){
        let keys = exp.split('.');
        let val = vm;
        for (let i = 0; i < keys.length; i++){
            if (i === keys.length - 1){
                val[keys[i]] = newValue;
            }else{
                val = val[keys[i]];
            }
        }
        return val;
    }
}

// 更新工具
const update = {
    parentNode: null,
    updateText(node, val, options){
        let preText = options.preText || '',
            nextText = options.nextText || '';
        node.textContent = `${preText}${val}${nextText}`;
    },
    updateHtml(node, val){
        node.innerHTML = val;
    },
    updateCheck(node, val){
        node.check = val;
    },
    updateValue(node, val){
        node.value = val;
    },
    updateAttribute(node, val, attr){
        console.log('arguments...', arguments);
        node.setAttribute(attr.attr, val);
    },
    updateDom(node, val){
        if (!this[`update${val}Dom`]){
            this[`update${val}Dom`] = node.parentNode;
        }
        console.log('this[`update${val}Dom`]', this[`update${val}Dom`]);
        if (val){
            if (!node.parentNode){
                this[`update${val}Dom`].appendChild(node);
            }
        }else{
            console.log('node...', node);
            if (node.parentNode && (node.parentNode === this[`update${val}Dom`])){
                this[`update${val}Dom`].removeChild(node);
            }
        }
    }
}


export default Compile;