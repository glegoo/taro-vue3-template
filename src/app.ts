/*
 * @Author: Cheng Wei
 * @Date: 2023-04-26 09:53:09
 * @LastEditTime: 2023-04-26 15:08:44
 * @LastEditors: Cheng Wei
 * @Description: 
 * @FilePath: \taro-vue3-template\src\app.ts
 * @GitHub: https://github.com/glegoo
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './app.scss'

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

export default App
