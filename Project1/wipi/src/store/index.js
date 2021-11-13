import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// 引入自模块
import article from './modules/article'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    article
  },
  plugins: [createLogger()]
})
