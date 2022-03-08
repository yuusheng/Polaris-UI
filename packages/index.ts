import { App } from 'vue'

// 引入组件
import PlButton from './button'
import PlCard from './card'
import PlCheckbox from './checkbox'
import PlNav from './navbar'
import PlDropdown from './dropdown'
import PlInput from './input'

import Test from './test'

// TailwindCSS文件
// import './index.css'

// 所有组件列表
const components = [PlButton, PlCard, PlCheckbox, PlNav, PlDropdown, PlInput, Test]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}

const obj = { ...components }
export { obj }

export default {
  install,
}
