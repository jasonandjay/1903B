<template>
    <div>
        <header>
            <p class="search"></p>
        </header>
        <section>

        </section>

        <section class="tags">
            <li v-for="item in tags" :key="item.title">
                <image :src="item.icon" mode="widthFix"></image>
                <span>{{item.title}}</span>
            </li>
        </section>
    </div>
</template>

<script>
import {getTagList, getNoticeList, getSwiperImgs, getProdList} from '@/services/index';
const tags = [{
    title: '新品推荐',
    icon: '../../static/images/icon/newProd.png'
},{
    title: '限时特惠',
    icon: '../../static/images/icon/timePrice.png'
},{
    title: '每日疯抢',
    icon: '../../static/images/icon/neweveryday.png'
}]
export default {
    data(){
        return {
            tags,
            tagList: [],
            noticeList: [],
            swiperImgs: [],
            prodListDaily: [],
            prodListHot: [],
            prodListMore: []
        }
    },
    async created(){
        let results = await Promise.all([getTagList(), getNoticeList(), getSwiperImgs(), getProdList(1), getProdList(2), getProdList(3)]);
        [this.tagList, this.noticeList, this.swiperImgs, this.prodListDaily, this.prodListHot, this.prodListMore] = results;
    },
    onShareAppMessage(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.tags{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding-top: 20rpx;
    padding-bottom: 30rpx;
}
.tags li{
    display: flex;
    flex-direction: column;
}
.tags image{
        width: 75rpx;    
    }
.tags span{
        font-size: 26rpx;
        margin-top: 20rpx;    
    }
</style>
