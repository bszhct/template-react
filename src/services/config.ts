/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable no-extend-native */

import axios from 'axios'
import {HOST} from '../common/const'


// 基础配置
const http = axios.create({
  baseURL: HOST,
  // 设置超时时间
  timeout: 10000,
  // 发送 cookie
  withCredentials: true,
})

function dealError(tips: string) {
  return this
    .then(res => res)
    .catch((error: Error) => {
      // 将真正的操作打印出来给开发人员看, 或者将错误发送给邮箱
      console.error(error)
      // 给用户看的业务提示
      console.log(tips)
    })
}

declare global {
  interface Promise<T> {
    dealError: (tips: string) => Promise<T>
  }
}

// 扩展到 Promise, 支持 .dealError 方式调用
Promise.prototype.dealError = dealError

export {dealError}
export default http
