import { App } from 'vue'
import PlDropdown from './Dropdown.vue'
// 定义 install 方法, App 作为参数

PlDropdown.install = (app: App): void => {
  app.component(PlDropdown.name, PlDropdown)
}
export default PlDropdown
