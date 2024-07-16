import instance from '@/utils/request'
export function BannerService (params ={}) {
    const {distributionSite = '1'} = params
    return instance({
        url: '/home/banner',
        params:{
            distributionSite
        }
    })
}
export const NewService = (limit) => instance.get('/home/new',limit)
export const HotService = () =>instance.get('/home/hot')
export const ProductService = () =>instance.get('/home/goods')