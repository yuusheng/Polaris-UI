import { App } from 'vue'
import PlNav from './Navbar.vue'
// 定义 install 方法, App 作为参数

PlNav.install = (app: App): void => {
  app.component(PlNav.name, PlNav)
}
export default PlNav
