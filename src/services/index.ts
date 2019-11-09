/**
 * 
 * 全局的接口定义, 支持 async await 和 .then 调用
 */

import http from './config'


/**
 * 
 * 用户中心模块
 */
// 获取用户信息
export function getUser(data = {}) {
  return http.get('/user', data).dealError('服务器异常，请稍后重试')
}
// 登陆
export function login(data = {}) {
  return http.post('/login', data).dealError('登陆失败')
}
