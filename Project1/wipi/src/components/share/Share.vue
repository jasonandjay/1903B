<template>
    <el-dialog 
    ref="dialog"
    title="分享海报"
    :visible.sync="dialogVisible"
    width="30%">
        <img :src="item.cover" alt="">
        <p>{{item.title}}</p>
        <p>{{item.summary}}</p>
        <div>
            <div v-html="qrCode"></div>
            <div>
                <p>识别二维码查看文章</p>
                <p>原文分享自<span>小楼又清风</span></p>
            </div>
        </div>
        <slot name="footer">
            <button>关闭</button>
            <button @click="genePoster">下载</button>
        </slot>
    </el-dialog>
</template>

<script>
var QRCode = require("qrcode-svg");
import {genePoster} from '@/services/index'

export default {
    data(){
        return {
            dialogVisible: true
        }
    },
    props: {
        item: {
            default: ()=>{
                return {
                    title: '使用 TS 类型实现自然数加减乘除',
                    summary: '类型体操：使用 typescript 类型系统实现自然数的加减乘除法。',
                    cover: 'https://wipi.oss-cn-shanghai.aliyuncs.com/2021-11-01/typescript-960x504.png',
                    id: ''
                }
            }
        }
    },
    computed: {
        qrCode(){
            return new QRCode(`${
                process.env.NODE_ENV === 'production'?`https://blog.wipi.tech/article/${this.item.id}`: `http://localhost:8080/article/${this.item.id}`
            }`).svg();
        }
    },
    methods: {
        async genePoster(){
            // console.log('dialog...', this.$refs.dialog, this.$refs);

            let rect = this.$refs.dialog.$el.getBoundingClientRect();
            let result = await genePoster({
                height: 379 || rect.height,
                width: 391 || rect.width,
                name: this.item.title,
                pageUrl: `/article/${this.item.id}`,
                html: this.$refs.dialog.$el.innerHTML
            })
            console.log('result...', result);
        }
    }
}
</script>

<style lang="scss" scoped>
img{
    width: 100%;
}
</style>