import { createApp } from 'vue'
import App from './App.vue'
import PolarisUI from '~/index'
import '~/index.css'

const app = createApp(App)
app.use(PolarisUI)
app.mount('#app')
