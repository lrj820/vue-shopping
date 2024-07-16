import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { useRoute } from 'vue-router';
import {categoryService} from '@/api/Category'
export function useCategory (){
    const router = useRoute()
    const categoryList = ref([])
    const getcategory = async(id =router.params.id) =>{
        const res = await categoryService(id)
        categoryList.value = res.result
    }
    onMounted(() =>getcategory())
    
    onBeforeRouteUpdate((to) => {
        getcategory(to.params.id)
    })
    return{
        categoryList
    }
}