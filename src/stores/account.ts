import {observable, action} from 'mobx'
import {getUser} from '../services'
import {IUser} from '../common/interface'


class Account {
  // 当前登陆的用户信息
  @observable user: IUser = {
    id: 'uuid',
    nickname: '骆驼',
    mobile: 18888888888,
    avatar: '',
  }

  // 获取用户信息
  @action.bound getUser(): Promise<any> {
    return getUser()
      .then(res => {
        if (res) {
          this.user = res.data
        }
      })
  }
}

export default Account
