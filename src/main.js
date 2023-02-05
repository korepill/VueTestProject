import { createApp } from 'vue'
import App from './App'
import router from './router/router'
import components from '@/UI'

const app = createApp(App)

app
    .use(router)
    .mount('#app')
