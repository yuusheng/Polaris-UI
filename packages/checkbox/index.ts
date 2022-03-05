import { App } from 'vue'
import PlCheckbox from './Checkbox.vue'

// 定义 install 方法, App 作为参数
PlCheckbox.install = (app: App): void => {
  app.component(PlCheckbox.name, PlCheckbox)
}
export default PlCheckbox
