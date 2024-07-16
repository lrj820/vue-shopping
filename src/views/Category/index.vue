<script setup>
import {categoryService} from '@/api/Category'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {BannerService} from '@/api/Home'
import GoodsItem from '@/views/Home/components/Goodsitem.vue'
const router = useRoute()
const categoryList = ref([])
const getcategory = async() =>{
    const res = await categoryService(router.params.id)
    categoryList.value = res.result
}
onMounted(() =>getcategory())
const BannerList = ref([])
const getBanner = async() =>{
    const res = await BannerService({distributionSite : '2'})
    BannerList.value = res.result
    console.log(BannerList.value)
}
onMounted(() => {
    getBanner()
})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryList.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="sp-banner">
    <el-carousel v-if="BannerList.length > 0" height="500px">
      <el-carousel-item v-for="item in BannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
   </div>
   <div class="sub-list">
  <h3>全部分类</h3>
  <ul>
    <li v-for="i in categoryList.children" :key="i.id">
      <RouterLink to="/">
        <img :src="i.picture" />
        <p>{{ i.name }}</p>
      </RouterLink>
    </li>
  </ul>
</div>
<div class="ref-goods" v-for="item in categoryList.children" :key="item.id">
  <div class="head">
    <h3>- {{ item.name }}-</h3>
  </div>
  <div class="body">
    <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
  </div>
</div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.sp-banner{
width: 1240px;
height: 500px;
left: 0;
top: 0;


img {
    width: 100%;
    height: 500px;
  }
}
</style>