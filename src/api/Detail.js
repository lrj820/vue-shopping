import instance from '@/utils/request'
export const getGoodsService = (id) =>instance.get('/goods',{
    params:{
        id
    }
})
export const getDetailHotService = ({ id, type, limit = 3 }) => {
    return instance({
      url:'/goods/hot',
      params:{
        id, 
        type, 
        limit
      }
    })
  }