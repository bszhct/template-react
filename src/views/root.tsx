/**
 * 
 * 页面入口配置
 * 路由文档: https://reach.tech/router
 */

import * as React from 'react'
import {Router} from '@reach/router'

import {Header, Footer} from '../components'
import DevTools from './dev-tools'

import Login from './login'
import Register from './register'
import NotFound from './not-found'
import DidCatch from './did-catch'
import Home from './home'

import './common.styl'


export default class Root extends React.Component {
  fallback() {
    return <div className="loading-wrap">玩命加载中...</div>
  }
  
  render() {
    return (
      <div className="root-container">
        <Header />
        <React.Suspense fallback={this.fallback()}>
          {/* 不把 DidCatch 放到顶层是因为即使页面渲染出错了, 也保证网站能显示出 Header 和 Footer 结构 */}
          <DidCatch>
            <Router className="container FB1">
              <Login path="/login" />
              <Register path="/register" />
              <Home path="/" />
              <NotFound path="*" />
            </Router>
          </DidCatch>
        </React.Suspense>
        <Footer />
        <DevTools />
      </div>
    )
  }
}
