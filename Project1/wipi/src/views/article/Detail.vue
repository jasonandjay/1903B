<template>
    <div>
        <left-layout>
            <image-viewer>
                <high-light>
                    <div>
                        <img class="cover" :src="articleDetail.cover" alt="">
                        <p>{{articleDetail.title}}</p>
                        <p>发布于{{articleDetail.publishAt | formatDate('YYYY-MM-DD')}} • 阅读量 {{articleDetail.views}}</p>
                        <div v-html="articleDetail.html"></div>
                        <Comment :hostId="id" />
                        <CommentList :id="id" />
                    </div>
                </high-light>
            </image-viewer>
            <div>
                <button @click="shareArticle">分享</button>
            </div>
        </left-layout>
        <right-layout>

        </right-layout>
        <!-- <share /> -->
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import LeftLayout from '@/components/LeftLayout';
import RightLayout from '@/components/RightLayout';
import HighLight from '@/components/HighLight';
import ImageViewer from '@/components/ImageViewer';
import Comment from '@/components/Comment';
import CommentList from '@/components/CommentList';


// import Share from '@/components/share/Share';
import share from '@/components/share/index';

export default {
    data(){
        return {
            id: ''
        }
    },
    computed: {
        ...mapState({
            articleDetail: state=>state.article.articleDetail
        })
    },
    methods: {
        ...mapActions({
            getArticleDetail: 'article/getArticleDetail'
        }),
        shareArticle(){
            share(this.articleDetail);
        }
    },
    components: {
        LeftLayout,
        RightLayout,
        HighLight,
        ImageViewer,
        Comment,
        CommentList
        // Share
    },
    created(){
        // debugger;
        let id  = this.id = this.$route.params.id;
        this.getArticleDetail(id);
    }
}
</script>

<style lang="scss" scoped>
.cover{
    width: 100%;
}

</style>