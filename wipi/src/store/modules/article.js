import {getArticleList} from '@/services'
const state = {
    articleList: []
}

const mutations = {
    update(state, payload){
        for (let key in payload) {
            state[key] = payload[key];
        }
    }
}

const actions = {
    async getArticleList({commit}, payload){
        let result = await getArticleList();
        console.log('result...', result);
        if (result){
            commit('update', {articleList: result[0]});
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}