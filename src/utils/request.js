import fetch from 'dva/fetch';
import config from './config'

const { baseURL } = config;

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseErrorMessage(data) {
  const { code } = data;
  if (code !== '0000') {
    throw new Error(code);
  }
  return { data };
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {string} method
 * @param  {object} [params] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(arr) {
  //增加options的封装
  let options = {
    method: arr.method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "userToken": arr.params.userToken
    },
    body: JSON.stringify(arr.params)
  }
  return fetch(arr.url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(parseErrorMessage);
}
