import Share from './Share.vue';
import Vue from 'vue';

const ShareConstructor = Vue.extend(Share);

export default function(item){
    console.log('options', item);
    var instance = new ShareConstructor({propsData: {item}});
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
}