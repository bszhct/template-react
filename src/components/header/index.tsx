import * as React from 'react'
import {Link} from '@reach/router'

import './index.styl'

const logo = require('../../images/logo.svg')

type IProps = {
  to: string
}

const NavLink: React.SFC<IProps> = props => (
  <Link
    {...props}
    getProps={({isCurrent}) => {
      return {
        className: isCurrent ? 'link active' : 'link',
      }
    }}
  />
)


class Header extends React.PureComponent {
  render(): JSX.Element {
    return (
      <header className="header-wrap">
        <div className="container">
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <div className="account">
            <NavLink to="/login">登录</NavLink>
            <NavLink to="/register">注册</NavLink>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
