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
    return{
        cartList,
        addcart
    }
},{
    persist: true,
})