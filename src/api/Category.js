import instance from '@/utils/request'
export const categoryService = (id) => instance.get('/category',{
    params:{id}
})


/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
    return instance({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }

export const getGoodsService = (data) =>instance.post('/category/goods/temporary',data)
  
