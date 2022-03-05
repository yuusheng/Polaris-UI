import { App } from 'vue'
import PlButton from './button'
import PlCard from './card'
import PlCheckbox from './checkbox'
// import './styles/public.scss'
// TailwindCSS文件
// import './index.css'

// 所有组件列表
const components = [PlButton, PlCard, PlCheckbox]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}

export { PlButton, PlCard, PlCheckbox }

export default {
  install,
}
