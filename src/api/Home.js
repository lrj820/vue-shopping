import instance from '@/utils/request'
export const BannerService = (distributionSite) => instance.get('/home/banner',distributionSite )
export const NewService = (limit) => instance.get('/home/new',limit)