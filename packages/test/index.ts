import { App } from 'vue'
import Test from './Test.vue'
// 定义 install 方法, App 作为参数

Test.install = (app: App): void => {
  app.component(Test.name, Test)
}
export default Test
