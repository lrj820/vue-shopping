import instance from '@/utils/request'
export const BannerService = (distributionSite) => instance.get('/home/banner',distributionSite )