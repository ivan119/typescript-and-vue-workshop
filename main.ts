import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './src/App.vue'
import router from './src/router/index.ts'

import './assets/styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
