import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import router from './router'
import { createPinia } from 'pinia'
import api from '@/api'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    //
  },
})

const app = createApp(App)
app.provide('api', api)
app.use(vuetify)
app.use(router)
app.use(createPinia())

app.mount('#app')
