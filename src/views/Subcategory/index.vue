<script setup>
import {getCategoryFilterAPI,getGoodsService} from '@/api/Category'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Goodsitem from '../Home/components/Goodsitem.vue';
const route = useRoute()
const categoryList = ref({})
const getcategory =async() =>{
    const res = await getCategoryFilterAPI(route.params.id)
    categoryList.value = res.result
    console.log(res.result)
}
onMounted(() => {
    getcategory()
})
const goodsList = ref([])
const reqList = ref({
    categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoods = async() =>{
    const res = await getGoodsService(reqList.value)
    goodsList.value = res.result.items
    console.log(goodsList.value)
}
onMounted(() => {
    getGoods()
})
const tabChange = () =>{
   reqList.value.page = 1
    getGoods()
}
const disabled = ref(false)
const load =async() =>{
    reqList.value.page++
    const res = await getGoodsService(reqList.value)
    goodsList.value = [...goodsList.value,...res.result.items]
    if(res.result.items.length ===0){
        disabled.value=true
    }
}


</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryList.parentId}` }">{{ categoryList.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqList.sortField" @tab-change="tabChange" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body">
        <Goodsitem v-for="i in goodsList" :key="i.id" :good="i" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>