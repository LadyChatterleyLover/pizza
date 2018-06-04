import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //设置属性
        menuItem: {},
        currentUser: "",
        isLogin: false
    },
    getters: {
        //获取属性的状态
        getMenuItems: state => state.menuItem,
        currentUser: state => state.currentUser,
        isLogin: state => state.isLogin
    },
    mutations: {
        //改变属性的状态
        setMenuItems(state, data) {
            state.menuItem = data
        },
        //讲匹配到的对象从menuArr中删除
        removeItem(state, data) {
            state.menuItem.forEach((item, index) => {
                if (item == data) {
                    state.menuItem.splice(index, 1)
                }
            })
        },
        //讲新添加的pizza push到menuitem中
        pushToMenuItems(state, data) {
            state.menuItem.push(data)
        },
        //更改用户的状态信息
        userStatus(state, user) {
            if (user != null) {
                state.currentUser = user
                state.isLogin = true
            } else {
                state.currentUser = null
                state.isLogin = false
            }
        }
    },
    actions: {
        //应用mutations
        setUser({ commit }, user) {
            commit("userStatus", user)
        }
    }
})

export default store