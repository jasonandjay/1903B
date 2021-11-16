import {getArticleList, getArticleDetail} from '@/services'
const state = {
    articleList: [],
    page: 0,
    totalNum: 0,
    articleDetail: {}
}

const mutations = {
    update(state, payload){
        for (let key in payload) {
            state[key] = payload[key];
        }
    }
}

const actions = {
    async getArticleList({commit, state}, payload){
        let result = await getArticleList(state.page);
        console.log('result...', result);
        if (result){
            let articleList = result[0];
            if (state.page > 1){
                articleList = [...state.articleList, ...articleList];
            }
            commit('update', {
                articleList,
                totalNum: result[1]
            });
        }
    },
    async getArticleDetail({commit, state}, payload){
        let result = await getArticleDetail(payload);
        if (result){
            commit('update', {
                articleDetail: result
            })
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}