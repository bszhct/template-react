/**
 * 
 * 全局的常量定义
 * 
 */

// 开发环境
export const IS_DEV: boolean = process.env.NODE_ENV === 'development'

// 开发环境请求地址
export const HOST_DEV = 'http://127.0.0.1:9002'
// 生产环境请求地址
export const HOST_PROD = 'http://production.com'
// 当前使用的环境请求地址
export const HOST: string = IS_DEV ? HOST_DEV : HOST_PROD
