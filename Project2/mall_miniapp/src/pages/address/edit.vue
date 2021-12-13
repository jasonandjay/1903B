<template>
    <div>
        <span>所在地区：</span>
        <picker mode="multiSelector" 
            range-key="areaName" 
            @columnchange="columnChange"
            :range="[provinceList, cityList, areaList]"
        >{{areaName}}</picker>
    </div>
</template>

<script>
import {getAreaByPid} from '@/services/index'
export default {
    data(){
        return {
            provinceList: [],
            cityList: [],
            areaList: [],
            curProviceId: '',
            curCityId: '',
            curAreaId: ''
        }
    },
    methods: {
        columnChange({target: {value, column}}){
            switch(column){
                case 0: this.curProviceId = this.provinceList[value].areaId;break;
                case 1: this.curCityId = this.cityList[value].areaId;break;
                case 2: this.curAreaId = this.areaList[value].areaId;break;
                default: 
            }
        }
    },
    computed: {
        areaName(){
            if (!this.provinceList.length || !this.cityList.length || !this.areaList.length){
                return;
            } 
            let provinceIndex = this.provinceList.findIndex(item=>item.areaId===this.curProviceId),
                cityIndex = this.cityList.findIndex(item=>item.areaId===this.curCityId),
                areaIndex = this.areaList.findIndex(item=>item.areaId===this.curAreaId);
            return `${this.provinceList[provinceIndex].areaName} ${this.cityList[cityIndex].areaName} ${this.areaList[areaIndex].areaName}` || '选择地址'
        }
    },
    watch: {
        async curProviceId(value){
            // 处理省和市的联动
            let result = await getAreaByPid(value);
            this.cityList = result;
            this.curCityId = result[0].areaId;
        },
        async curCityId(value){
            // 处理市和区的联动
            let result = await getAreaByPid(value);
            this.areaList = result;
            this.curAreaId = result[0].areaId;
        }
    },
    async created(){
        let inter = setInterval(async ()=>{
            let access_token = wx.getStorageSync('access_token');
            if (access_token){
                clearInterval(inter);
                let result = await getAreaByPid(0);
                console.log(result);
                this.provinceList = result;
                this.curProviceId = result[0].areaId;
            }
        }, 10);
    }
}
</script>

<style>

</style>