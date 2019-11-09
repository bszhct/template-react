
/**
 * 
 * 全局的接口定义, 业务组件基础接口定义
 */

export interface IUser {
  id?: string
  nickname?: string
  mobile?: number
  avatar?: string
}

export interface IRouterPropBase {
  path?: string
}

export interface IPropBase extends IRouterPropBase {
  account?: {
    user: IUser
    getUser: () => Promise<any>
  }
}
