import instance from '@/utils/request'
export const  getuserService = ({account,password}) =>instance.post('/login',{account,password})
export const getLikeListAPI = ({ limit = 4 }) => {
    return instance({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }