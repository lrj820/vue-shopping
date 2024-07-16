import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 使 v-focus 在所有组件中都可用
app.directive('img-lazy', {
    mounted(el, binding) {
        console.log(el,binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
            if(isIntersecting){
                el.src = binding.value
            }
            },
          )
    },
})
