<script setup>
import { ref,onMounted } from 'vue';
import {BannerService} from '@/api/Home'
const BannerList = ref([])
const getBanner = async() =>{
    const res = await BannerService()
    BannerList.value = res.result
    console.log(BannerList.value)
}
onMounted(() => {
    getBanner()
})
</script>
<template>
   <div class="sp-banner">
    <el-carousel v-if="BannerList.length > 0" height="500px">
      <el-carousel-item v-for="item in BannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
   </div>
</template>
<style scoped lang="scss">
.sp-banner{
width: 1240px;
height: 500px;
position: absolute;
left: 0;
top: 0;
z-index: 98;

img {
    width: 100%;
    height: 500px;
  }
}
</style>