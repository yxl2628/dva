import request from '../utils/request'
import config from '../utils/config'
const { baseURL,api } = config
const { getMenuList,getChildMenuList } = api

export async function menuList (data) {
  return request({
    url: baseURL+getMenuList,
    method: 'POST',
    params:{
      languageType:data.languageType
    },
  })
}

export async function childMenuList (data) {
  return request({
    url: baseURL+getChildMenuList,
    method: 'POST',
    params:{
      languageType:data.languageType,
      parentId:data.parentId
    },
  })
}
