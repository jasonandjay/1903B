<template>
    <p>购物车页面</p>
</template>

<script>
import {deleteItem} from '@/services/index'
export default({
    async created(){
        let result = await deleteItem([356]);
        console.log('result...', result);
    }
})
</script>
