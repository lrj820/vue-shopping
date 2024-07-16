import instance from '@/utils/request'
export const categoryService = (id) => instance.get('/category',{
    params:{id}
})