/* eslint-disable react/destructuring-assignment */
import * as React from 'react'

interface IProps {
  children: React.ReactNode
}


export default class DidCatch extends React.Component<IProps> {
  readonly state = {
    hasError: false,
  }

  // 降级渲染错误页面
  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  componentDidCatch(error, errorInfo) {
    // 输出具体的错误到控制台, 方便开发调试, 也可以发送请求到服务器
    console.error('页面渲染错误 =>')
    console.error(error.toString())
    console.error(errorInfo.componentStack)
  }

  render() {
    if (this.state.hasError) {
      // 页面渲染出错后给用户看的信息
      return (
        <div className="did-cath-wrap">
          哇，页面居然报错了！
        </div>
      )
    }

    return this.props.children 
  }
}
