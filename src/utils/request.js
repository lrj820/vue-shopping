import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
const instance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  instance.interceptors.response.use(res => res.data, e => {
    ElMessage({
      type:'warning',
      message:e.response.data.msg
    })
    return Promise.reject(e)
  })

  export default instance