import { USER } from "@/types/user"

interface STATE {
    USERINFO: USER | null;
}

//  单一状态树
const state: STATE = {
    USERINFO: null
}

// getters 暴露出去的获取 state 的计算属性
const getters = {
    getUser: (state: STATE) => {
        return state.USERINFO;
    },
}

// mutations 私有化方法，只能被 actions 调用， 可以直接变更状态
const mutations = {
    // 设置全量 menu
    setUser: (state: STATE, data: USER) => {
        state.USERINFO = data;
    }
}

// actions 暴露到外部的方法 不直接变更状态
const actions = {
    setUser: ({ commit }: { commit: any }, data: USER) => {
        commit("setUser", data);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
