import instance from '@/utils/request'
export const insertCartAPI = ({count,skuId}) =>instance.post('/member/cart',{skuId,count})
export const getCartList = () =>instance.get('/member/cart')
// 删除购物车
export const delCartAPI = (ids) => {
    return instance({
      url: '/member/cart',
      method: 'DELETE',
      data: {
        ids
      }
    })
  }
  export const mergeCartAPI =(data) =>instance.post('/member/cart/merge',data)