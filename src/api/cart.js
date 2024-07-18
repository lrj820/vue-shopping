import instance from '@/utils/request'
export const insertCartAPI = ({count,skuId}) =>instance.post('/member/cart',{skuId,count})
export const getCartList = () =>instance.get('/member/cart')