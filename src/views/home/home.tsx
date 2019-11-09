import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {IPropBase} from '../../common/interface'


@inject('account')
@observer
export default class Home extends React.Component<IPropBase> {
  render() {
    const {account} = this.props

    return (
      <div className="home-container">
        <div className="user-box">
          欢迎回来，
          <span className="nickname">{account.user.nickname}</span>
        </div>
      </div>
    )
  }
}
