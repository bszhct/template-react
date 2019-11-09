/**
 * 
 * 通用的工具函数库
 * 完善的 JSDoc 注释, 完整的类型定义, 简单的使用示例
 * 
 */

/**
 * 
 * 字符串转对象
 * @examples ?a=1&b=2 | a=1&b=2 => {a: 1, b: 2}
 * 
 * @param {string} str 一个字符串, 支持以 ?/# 开头
 * @returns {object} 转换后的对象
 */
export function strToObject(str = ''): object {
  const res = {}
  let s = str
  if (!s) {
    return res
  }
  if (['?', '#'].some(item => s.includes(item))) {
    s = s.slice(1)
  }
  s.split('&').forEach(item => {
    const [key, val] = item.split('=')
    res[key] = /^[0-9]+.?[0-9]*/.test(val) ? +val : val
  })
  return res
}

/**
 * 
 * 对象转字符串
 * @examples {a: 1, b: 2} => a=1&b-2
 * 
 * @param {object} obj 一个对象
 * @returns {string} 转换后的字符串
 */
export function objectToStr(obj = {}): string {
  return Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&')
}

/**
 * 
 * 判断一个值是否是字符串
 * @examples '' | {} => true | false
 * 
 * @param {object} v 任何值
 * @returns {boolean} 结果
 */
export function isString(v = ''): boolean {
  return Object.prototype.toString.call(v) === '[object String]'
}

/**
 * 判断一个值是否是对象
 * @examples {} | [] => true | false
 * 
 * @param {object} v 任何值
 * @returns {boolean} 结果
 */
export function isObject(v = {}): boolean {
  return Object.prototype.toString.call(v) === '[object Object]'
}

/**
 * 判断一个值是否是数组
 * @examples [] | '' => true | false
 * 
 * @param {object} v 任何值
 * @returns {boolean} 结果
 */
export function isArray(v = []): boolean {
  return Object.prototype.toString.call(v) === '[object Array]'
}

/**
 * 参数编码
 * @examples //127.0.0.1:9001 => %2F%2F127.0.0.1%3A9001
 * 
 * @param {object} str 一个字符串, 一般是一个链接
 * @returns {string} 编码之后的字符串
 */
export function encode(str = ''): string {
  return window.encodeURIComponent(str)
}

/**
 * 参数解码
 * @examples %2F%2F127.0.0.1%3A9001 => //127.0.0.1:9001
 * 
 * @param {object} str 一个字符串, 一般是一个被 encodeURIComponent 加密的链接
 * @returns {string} 解码之后的字符串
 */
export function decode(str = ''): string {
  return window.decodeURIComponent(str)
}
