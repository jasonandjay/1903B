<template>
    <div>
        <ul>
            <li v-for="item in commentLists" :key="item.id">
                <comment-item :item="item" :id="id"/>               
            </li>    
        </ul>    
    </div>    
</template>

<script>
import { getCommentList } from '@/services'
import CommentItem from '@/components/CommentItem';

export default {
    data(){
        return {
            commentLists: [],
            commentLength: 0
        }
    },
    components: {
        CommentItem
    },
    props: ['id'],
    async created(){
        let result = await getCommentList(this.id);
        console.log('comment list result...', result);
        if (result.length){
            this.commentLists = result[0].map(item=>({...item, showComment: false}));
            this.commentLength = result[1];
        }
    }
}
</script>

<style>

</style>