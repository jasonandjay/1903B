<template>
    <div>
        <div class="left">
            <ul>
                <li v-for="item in articleList" :key="item.id">
                    <span>{{item.title}}</span>
                    <p>{{item.createAt}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    computed: {
        ...mapState({
            articleList: state=>state.article.articleList
        })
    },
    methods: {
        ...mapActions({
            getArticleList: 'article/getArticleList'
        })
    },
    created(){
        this.getArticleList();
    }
}
</script>

<style>

</style>