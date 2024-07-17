import instance from '@/utils/request'
export const getGoodsService = (id) =>instance.get('/goods',{
    params:{
        id
    }
})