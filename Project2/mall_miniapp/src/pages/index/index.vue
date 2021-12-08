<template>
    <p>页面</p>
</template>

<script>
import {getTagList} from '@/services/index';

export default {
    async created(){
        // console.log('getTagList...', getTagList);
        let result = await getTagList();
        console.log('result...');
    },
    onShareAppMessage(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>
