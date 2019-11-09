import * as React from 'react'
import {IRouterPropBase} from '../../common/interface'


export default class NotFound extends React.Component<IRouterPropBase> {
  render() {
    return (
      <div className="not-found-container">
        404
      </div>
    )
  }
}
