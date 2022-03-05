import { createApp } from 'vue'
import App from './App.vue'
import PolaireUI from '~/index'

const app = createApp(App)
app.use(PolaireUI)
app.mount('#app')
