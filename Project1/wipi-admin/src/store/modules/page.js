import { getViewPage } from '@/api/page'

const state = {
  pageCount: 0,
  pageList: []
}

const mutations = {
  update(state, payload) {
    for (const key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  async getViewPage({ commit }, payload = {}) {
    console.log('payload...', payload)
    const { page = 1, ...options } = payload
    const result = await getViewPage(page, options)
    console.log('result...', result)
    if (result.data) {
      commit('update', {
        pageCount: result.data[1],
        pageList: result.data[0]
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
