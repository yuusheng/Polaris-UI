import { App } from 'vue'
import PlButton from './button'
import PlCard from './card'

// 所有组件列表
const components = [PlButton, PlCard]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}

export { PlButton, PlCard }

export default {
  install,
}
