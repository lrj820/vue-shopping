import {BannerService} from '@/api/Home'
import { onMounted, ref } from 'vue';
export function useBanner (){
    const BannerList = ref([])
    const getBanner = async() =>{
    const res = await BannerService({distributionSite : '2'})
    BannerList.value = res.result
    console.log(BannerList.value)
}
onMounted(() => {
    getBanner()
})
return{
    BannerList
}
}