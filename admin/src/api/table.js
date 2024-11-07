import request from '@/utils/request'

export function userpage(data) {
  return request({
    url: '/user/page',
    method: 'post',
    data
  })
}
export function usercreate(data) {
  return request({
    url: '/user/create',
    method: 'post',
    data
  })
}
export function userupdate(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}
export function intermediatorpage(data) {
  return request({
    url: '/intermediator/page',
    method: 'post',
    data
  })
}
export function intermediatorcreate(data) {
  return request({
    url: '/intermediator/create',
    method: 'post',
    data
  })
}
export function intermediatorupdate(data) {
  return request({
    url: '/intermediator/update',
    method: 'post',
    data
  })
}
export function electronDatapage(data) {
  return request({
    url: '/electronData/page',
    method: 'post',
    data
  })
}
export function userchangePwd(data) {
  return request({
    url: '/user/changePwd',
    method: 'post',
    data
  })
}
export function intermediatorchangePwd(data) {
  return request({
    url: '/intermediator/changePwd',
    method: 'post',
    data
  })
}
export function edSettlementpage(data) {
  return request({
    url: '/edSettlement/page',
    method: 'post',
    data
  })
}
export function edSettlementcreate(data) {
  return request({
    url: '/edSettlement/create',
    method: 'post',
    data
  })
}
export function edSettlementdelete(data) {
  return request({
    url: '/edSettlement/delete',
    method: 'post',
    data
  })
}
export function edSettlementedPage(data) {
  return request({
    url: '/edSettlement/edPage',
    method: 'post',
    data
  })
}
