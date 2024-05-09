import './bootstrap'
import './css/app.css'
import.meta.glob(['@/images/**', './fonts/**'])

//import './assets/main.css'
import 'animate.css/animate.min.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/index.css'

import countTo from 'vue3-count-to'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('@/pages/Home.vue') ,name:'Index'},
    { path: '/jobs', component: () => import('@/pages/jobs/JobList.vue') },
    { path: '/jobs/:id', component: () => import('@/pages/jobs/JobDetail.vue') },
    { path: '/schools', component: () => import('@/pages/schools/SchoolList.vue'),name: 'Schools'},
    { path: '/schools/:id', component: () => import('@/pages/schools/SchoolDetail.vue') },
    { path: '/news', component: () => import('@/pages/news/NewsList.vue'),name:'News' },
    { path: '/news/:id', component: () => import('@/pages/news/NewsDetail.vue') },
    { path: '/about', component: () => import('@/pages/About.vue') },
    { path: '/downloads', component: () => import('@/pages/download/DownloadList.vue') },
    { path: '/register', component: () => import('@/pages/Register.vue') },
    { path: '/logon', component: () => import('@/pages/Logon.vue') ,name:'Logon'},
    { path: '/reset_password', component: () => import('@/pages/ResetPassword.vue') },
    { path: '/member', component: () => import('@/pages/userCenter/Application.vue') },
    { path: '/user_center', component: () => import('@/pages/userCenter/Application.vue') ,name:'Usercenter'},
    { path: '/user_center/info', component: () => import('@/pages/userCenter/Registration.vue') },
    { path: '/user_center/password', component: () => import('@/pages/userCenter/Password.vue') },
    { path: '/user_center/resume', component: () => import('@/pages/userCenter/Resume.vue') ,name:'Usercenterresume'},
    {
      path: '/user_center/application',
      component: () => import('@/pages/userCenter/Application.vue')
    }
  ]
})
app.use(router)
app.use(createPinia())
app.use(countTo)
app.use(ElementPlus)

app.mount('#app')
