import request from '../utils/request'
import config from '../utils/config'
const { baseURL,api } = config
const { userLogin } = api

export async function login (data) {
  return request({
    url: baseURL+userLogin,
    method: 'POST',
    params:{
      username:data.userName,
      password:data.password
    },
  })
}

export async function logout (data) {
  return request({
    url: baseURL+userLogin,
    method: 'GET',
    params:{},
  })
}
