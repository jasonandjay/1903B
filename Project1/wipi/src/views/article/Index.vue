<template>
    <div>
        <left-layout>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                 <li v-for="item in articleList" :key="item.id">
                   <article-item :item="item"></article-item>
                </li>
            </div>
        </left-layout>
        <right-layout>

        </right-layout>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex';
import LeftLayout from '@/components/LeftLayout';
import RightLayout from '@/components/RightLayout';
import infiniteScroll from 'vue-infinite-scroll';
import ArticleItem from '@/components/ArticleItem';
import Vue from 'vue';

Vue.use(infiniteScroll)

export default {
    directives: {
        infiniteScroll
    },
    components: {
        LeftLayout,
        RightLayout,
        ArticleItem
    },
    computed: {
        ...mapState({
            articleList: state=>state.article.articleList,
            page: state=>state.article.page,
            totalNum: state=>state.article.totalNum
        })
    },
    methods: {
        ...mapActions({
            getArticleList: 'article/getArticleList'
        }),
        ...mapMutations({
            update: 'article/update'
        }),
        loadMore(){
            console.log('load more...');
            if (this.page*10 <= this.totalNum){
                this.update({page: this.page+1})
            }
        }
    },
    watch: {
        page(){
            this.getArticleList();
        }
    },
    created(){
    }
}
</script>

<style>

</style>