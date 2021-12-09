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
            info: {}
        }
    },
    async mounted(){
        console.log('this...', this);
        this.id = this.$mp.query.prodid;
        let result = await getProdInfo(this.id);
        this.info = result;
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
</style>