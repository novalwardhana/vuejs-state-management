import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        name: "",
        email: "",
        address: "",
        userData: {},
        data: {}
    },
    getters: {
        getName: state => {
            return state.name
        },
        getEmail: state => {
            return state.email
        },
        getAddress: state => {
            return state.address
        },
        getUserData: state => {
            return state.userData
        }
    },
    mutations: {
        setName: (state, payload) => {
            state.name = payload
        },
        setEmail: (state, payload) => {
            state.email = payload
        },
        setAddress: (state, payload) => {
            state.address = payload
        },
        setUserData: (state, payload) => {
            state.userData = payload
        },
        clearName: (state) => {
            state.name = ""
        },
        clearEmail: (state) => {
            state.email = ""
        },
        clearAddress: (state) => {
            state.address = ""
        },
        clearUserData: (state) => {
            state.userData = {}
        },
    },
    plugins: [
        createPersistedState()
    ]
})

export default store