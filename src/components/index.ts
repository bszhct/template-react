/**
 * 组件结构参考
 * 
 * 简单的组件结构
 * - component-name
 *   - index.ts(组件代码以及导出)
 *   - index.styl(样式)
 * 
 * 复杂的组件结构
 * - component-name
 *   - index.ts(导出和样式引用)
 *   - index.styl(样式)
 *   - component-name.ts(组件代码)
 *   - a.ts(拆分的组件代码)
 *   - b.ts(拆分的组件代码)
 */

import Header from './header'
import Footer from './footer'


export {
  Header,
  Footer,
}
