/*
 * @Author: Cheng Wei
 * @Date: 2023-04-26 15:24:05
 * @LastEditTime: 2023-04-26 15:29:20
 * @LastEditors: Cheng Wei
 * @Description: 
 * @FilePath: \taro-vue3-template\src\api\http.ts
 * @GitHub: https://github.com/glegoo
 */
import Taro from '@tarojs/taro'
import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

class httpRequest {
  baseOptions(params, method = 'GET') {
    let { url, data } = params
    const BASE_URL = process.env.VUE_BASE_URL
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    const option: Taro.request.Option = {
      url: BASE_URL + url,
      data: data,
      // @ts-ignore
      method,
      header: {
        'content-type': contentType,
        Authorization: Taro.getStorageSync('Authorization')
      }
    }
    return Taro.request(option)
  }

  get(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option)
  }

  post(url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }

  put(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option, 'PUT')
  }

  delete(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option, 'DELETE')
  }
}

export default new httpRequest()
