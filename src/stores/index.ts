/**
 * 
 * 全局通用的数据定义, 例如用户中心的用户信息, 一般来说会跨越多个页面以及组件使用
 */

import Account from './account'

const account = new Account()


export default {
  account,
}
