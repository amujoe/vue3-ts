import {RouteRecordRaw } from 'vue-router'

interface STATE {
    MENU: RouteRecordRaw;
}

//  单一状态树
const state = {
    MENU: null
}

// getters 暴露出去的获取 state 的计算属性
const getters = {
    getMenu: (state: STATE) => {
        return state.MENU;
    },
}

// mutations 私有化方法，只能被 actions 调用， 可以直接变更状态
const mutations = {
    // 设置全量 menu
    setMenu: (state: STATE, data: RouteRecordRaw) => {
        state.MENU = data;
    }
}

// actions 暴露到外部的方法 不直接变更状态
const actions = {
    setMenu: ({ commit }: { commit: any }, data: RouteRecordRaw) => {
        commit("setMenu", data);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
