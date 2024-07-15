import { ref } from 'vue'
import { defineStore } from 'pinia'
import {LayoutService} from '@/api/Layout'
export const useCategoryStore = defineStore('category', () => {
    const LayoutList = ref([])
    const getLayout = async() =>{
        const res = await LayoutService()
        LayoutList.value = res.result
    }
return {
    LayoutList,
    getLayout
}
})
