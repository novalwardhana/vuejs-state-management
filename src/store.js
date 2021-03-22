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
    actions: {
        setName(context, payload) {
            context.commit('SET_NAME', payload);
        },
        setEmail(context, payload) {
            context.commit('SET_EMAIL', payload);
        },
        setAddress(context, payload) {
            context.commit('SET_ADDRESS', payload);
        },
        setUserData(context, payload) {
            context.commit('SET_USER_DATA', payload);
        },
        clearName(context) {
            context.commit('CLEAR_NAME')
        },
        clearEmail(context) {
            context.commit('CLEAR_EMAIL')
        },
        clearAddress(context) {
            context.commit('CLEAR_ADDRESS')
        },
        clearUserData(context) {
            context.commit('CLEAR_USER_DATA')
        },
    },
    mutations: {
        SET_NAME: (state, payload) => {
            state.name = payload
        },
        SET_EMAIL: (state, payload) => {
            state.email = payload
        },
        SET_ADDRESS: (state, payload) => {
            state.address = payload
        },
        SET_USER_DATA: (state, payload) => {
            state.userData = payload
        },
        CLEAR_NAME: (state) => {
            state.name = ""
        },
        CLEAR_EMAIL: (state) => {
            state.email = ""
        },
        CLEAR_ADDRESS: (state) => {
            state.address = ""
        },
        CLEAR_USER_DATA: (state) => {
            state.userData = {}
        },
    },
    plugins: [
        createPersistedState()
    ]
})

export default store