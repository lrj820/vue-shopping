import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCartStore = defineStore('cart',() =>{
    const cartList = ref([])
    const addcart = (DetailList) =>{
        const item = cartList.value.find((item) =>DetailList.skuId === item.skuId)
    if(item) {
        item.count++
    }else {
        cartList.value.push(DetailList)
    }
    }
      // 删除购物车
  const delCart = async (skuId) => {
    // 思路：
    // 1. 找到要删除项的下标值 - splice
    // 2. 使用数组的过滤方法 - filter
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx, 1)
}
    return{
        cartList,
        addcart,
        delCart
    }
},{
    persist: true,
})