/*
 * @Author: huwanfei
 * @Date: 2023-08-04 10:59:36
 * @LastEditTime: 2023-08-04 15:28:02
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
import vant from './common/vantui'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vant)

app.mount('#app')
