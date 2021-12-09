<template>
    <div v-if="Object.keys(info).length">
        <!-- 商品详情轮播 -->
        <section>
            <swiper indicator-dots 	indicator-active-color="red">
                <swiper-item>
                    <image :src="info.imgs" mode="widthFix"/>
                </swiper-item>
            </swiper>
        </section>

        <!-- 商品信息 -->
        <section>
            <div>
                <div>
                    <p>{{info.prodName}}</p>
                    <p>{{info.brief}}</p>
                </div>
                <div>
                    <image src="../../static/images/icon/prod-col.png"/>
                    <span>收藏</span>
                </div>
            </div>
            <p>${{info.price}}</p>
        </section>

        <!-- 商品sku -->
        <section>
            <p @click="showSkuSelect=true">
                <span>已选</span>
                <span>{{selectSku.join(',')}},{{num}}件</span>
                <span>...</span>
            </p>
            <van-popup
                :show="showSkuSelect"
                position="bottom"
                @close="showSkuSelect=false"
            >
                <div>
                    <section>
                        <image :src="selectProd.pic" mode="widthFix">
                        <div>
                            <p>¥ {{selectProd.price}}</p>
                            <p>库存：{{selectProd.stocks}}件</p>
                            <p>
                                <span>已选</span>
                                <span>{{selectSku.join(',')}},{{num}}件</span>

                            </p>
                        </div>
                    </section>
                    <section>
                        <li class="sku-item" v-for="(item, index) in sku" :key="index">
                            <p>{{index}}</p>
                            <div>
                                <button @click="changeSelect(index, value, !availableSku[index].includes(value))" :class="{disable: !availableSku[index].includes(value), active: selectSku.includes(value)}" v-for="(value,key) in item" :key="value">{{value}}</button>
                            </div>
                        </li>
                    </section>
                </div>
            </van-popup>
        </section>

        <!-- 商品评论 -->  
        <section></section>

        <!-- 商品详情 -->
        <section>
            <rich-text :nodes='info.content.replace(/(\<img class=\"\" style=\")/g, "$1max-width:100% !important;height: auto !important;").replace(/width=\"750\"/g, "")'></rich-text>
        </section>
    
    </div>
</template>

<script>
import {getProdInfo} from '@/services/'
export default {
    data(){
        return {
            info: {},
            sku: {},    // 所有可供选择的sku选项
            selectSku: [],  // 当前选中的sku选项
            availableSku: {},    // 有库存的sku选项
            num: 1,
            showSkuSelect:false,
            isDisabled: false
        }
    },
    computed: {
        selectProd(){
            if (this.info.skuList){
                let result = this.info.skuList.filter(item=>{
                    return item.skuName.trim()===this.selectSku.join(' ')
                });
                return result.length? result[0]: {}
            }
            return {}
        }
    },
    methods: {
        changeSelect(index, value, disable){
            let keys = Object.keys(this.sku),
                selectSku = [...this.selectSku];
            index = keys.findIndex(item=>item===index);
            selectSku[index] = value;
            this.selectSku = selectSku;
            this.isDisabled = disable;
        }
    },
    watch: {
        selectSku(){
            let availableSku = {};
            let keys = Object.keys(this.sku);
            for (let key in this.sku){
                let index = keys.findIndex(item=>item===key);
                let properties = [...this.selectSku];
                availableSku[key] = this.sku[key].filter(item=>{
                    // 判断这一项结合其他两个选项在一块有没有库存
                    properties[index] = item;
                    let properStr = '';
                    for (let i=0; i<keys.length; i++){
                        properStr += `${keys[i]}:${properties[i]};`
                    }
                    let availableSkuStocks = this.info.skuList.filter(item=>item.properties===properStr.slice(0, -1)).length;
                    return availableSkuStocks;
                })
            }
            this.availableSku = availableSku;
        }
    },
    async mounted(){
        console.log('this...', this);
        this.id = this.$mp.query.prodid;
        let result = await getProdInfo(this.id);
        this.info = result;
        // 计算sku
        let sku = {}, selectSku = [];
        result.skuList.forEach(item=>{
            let properties = item.properties.split(';');
            properties.forEach(value=>{
                let temp = value.split(':');
                if (sku[temp[0]]){
                    sku[temp[0]].push(temp[1])
                }else{
                    sku[temp[0]] = [temp[1]];
                }
            })
        })
        for (let key in sku){
            sku[key] = [...new Set(sku[key])];
            selectSku.push(sku[key][0]);
        }
        this.sku = sku;
        this.selectSku = selectSku;
    }
}
</script>

<style lang="scss" scoped>
swiper{
    height: 750rpx;
}
image{
    width: 100%;
}
rich-text{
    width: 100%;    
}
.sku-item{
    div{
        display: flex;
        align-items: center;
    }
    button{
        width: 160rpx;
        margin: 10rpx;
        font-size: 28rpx;
        color: #333;
        line-height: 1.5;
        padding: 10rpx;
    }
    button.active{
        background: red;
        color: #fff;
    }
    button.disable{
        border: 1px dashed #ccc;
    }
}
</style>