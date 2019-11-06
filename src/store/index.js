import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    activeContact: null
  },
  getters: {
    getActiveContact: state => {
      return state.activeContact;
    }
  },
  mutations: {
    setActiveContact(state, contact) {
      state.activeContact = contact;
    }
  },
  actions: {
    clickContact({ commit }, contact) {
      commit("setActiveContact", contact);
    }
  }
});

export default store;
