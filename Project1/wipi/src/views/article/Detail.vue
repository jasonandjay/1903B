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
                    </div>
                </high-light>
            </image-viewer>
        </left-layout>
        <right-layout>

        </right-layout>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import LeftLayout from '@/components/LeftLayout';
import RightLayout from '@/components/RightLayout';
import HighLight from '@/components/HighLight';
import ImageViewer from '@/components/ImageViewer';

export default {
    computed: {
        ...mapState({
            articleDetail: state=>state.article.articleDetail
        })
    },
    methods: {
        ...mapActions({
            getArticleDetail: 'article/getArticleDetail'
        })
    },
    components: {
        LeftLayout,
        RightLayout,
        HighLight,
        ImageViewer
    },
    created(){
        // debugger;
        let id = this.$route.params.id;
        this.getArticleDetail(id);
    }
}
</script>

<style lang="scss" scoped>
.cover{
    width: 100%;
}

</style>