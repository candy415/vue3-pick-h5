/*
 * @Author: huwanfei
 * @Date: 2023-08-04 10:59:36
 * @LastEditTime: 2023-08-04 15:06:56
 * @LastEditors: huwanfei
 * @Description:
 * @FilePath: /vue3-pick-h5/vite.config.ts
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()]
    }),
    AutoImport ({
      imports: ["vue", "vue-router","pinia"], //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
      dts: 'src/types/auto-import.d.ts', // 根据引入来源自动生成的类型声明文件路径
      eslintrc: {
        enabled: true // 使用 eslint 配置
      }
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        math: 'always', // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          mainColor: 'red'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
