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
import {getCategoryList, getCategoryProdList} from '@/services/index';

export default {
    data(){
        return {
            categoryId: 0,
            categoryList: [],
            categoryProdList: []
        }
    },
    watch: {
        categoryId: {
            handler: async (value)=>{
                if (value){
                    let result = await getCategoryProdList(value);
                    console.log('result...', result);
                    this.categoryProdList = result.records;
                }
            }
        }
    },
    async created(){
        let result = await getCategoryList();
        result && (this.categoryList = result);
        this.categoryId = result[0].categoryId;
    },
    onShareAppMessage(){
        return {
            
        }
    }
}
</script>

<style scoped>

</style>
