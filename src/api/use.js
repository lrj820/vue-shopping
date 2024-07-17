import instance from '@/utils/request'
export const  getuserService = ({account,password}) =>instance.post('/login',{account,password})