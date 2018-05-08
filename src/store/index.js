import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// 每次修改了state的时候，会在控制台打印出log
import createLogger from 'vuex/dist/logger'
// 注册插件
Vue.use(Vuex)
// 调试工具，检测对state的修改是否是通过mutation来修改的，线下使用，线上的话此为false，严格模式关闭
const debug = process.env.NODE_ENV !== 'production'
// 暴露store的实例，工厂方式
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})