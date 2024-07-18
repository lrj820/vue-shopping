import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/use'
import router from '@/router'
const instance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    const useStore = useUserStore()
    const token = useStore.userInfo.token
    if (token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  instance.interceptors.response.use(res => res.data, e => {
    ElMessage({
      type:'warning',
      message:e.response.data.msg
    })
    const useStore = useUserStore()
    if(e.response.status ===401) {
      useStore.clearUserinfo()
      router.push('/login')
    }
    return Promise.reject(e)
  })

  export default instance