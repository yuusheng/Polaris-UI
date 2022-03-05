import { App } from 'vue'
import Card from './card.vue'
// import '~/styles/card.scss'

// 定义 install 方法， App 作为参数
Card.install = (app: App): void => {
  app.component(Card.name, Card)
}

export default Card
