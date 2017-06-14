import request from '../utils/request';
import config from '../utils/config';
const { baseURL,api } = config;

export async function getUserList (data) {
  return request({
    url: baseURL+api.getUserList,
    method: 'POST',
    params:data,
  })
}
