import instance from '@/utils/request'
export const getCheckoutInfoAPI = () => {
    return instance({
      url:'/member/order/pre'
    })
  }