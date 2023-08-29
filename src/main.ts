/*
 * @Author: huwanfei
 * @Date: 2023-08-04 10:59:36
 * @LastEditTime: 2023-08-29 14:34:23
 * @LastEditors: huwanfei
 * @Description:
 * @FilePath: /vue3-pick-h5/src/main.ts
 */
import './styles/main.less'

import { createApp } from 'vue'
import 'amfe-flexible'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
