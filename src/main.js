import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import './assets/navbar.css'
import './assets/home.css'
import './assets/project.css'
import './assets/resume.css'
import './assets/social.css'
import './assets/mq.css'

createApp(App).use(router).mount('#app')
