import Vue from 'vue';
import Vuex from 'vuex';
import { userService } from "../services/userService";
import contactModule from '@/store/modules/contact.module'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        loggedInUser: null
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser
        }
    },
    mutations: {
        setUser(state) {
            state.loggedInUser = userService.getUser()
        }
    },
    actions: {

    },
    modules: {
        contactModule
    }

});