import { App } from 'vue'
import PlInput from './Input.vue'
// 定义 install 方法, App 作为参数

PlInput.install = (app: App): void => {
  app.component(PlInput.name, PlInput)
}
export default PlInput
