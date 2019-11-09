import * as React from 'react'
import MobxDevTools from 'mobx-react-devtools'

import {IS_DEV} from '../common/const'


export default class DevTools extends React.Component {
  render() {
    if (IS_DEV) {
      return <MobxDevTools />
    }
    return null
  }
}
