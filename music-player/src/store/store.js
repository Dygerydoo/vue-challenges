import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchResults: [],
  },
  getters: {
    getSearchResults: state => {
      return state.searchResults;
    }
  },
  mutations: {
    FILL_SEARCH_LIST(state, searchResults) {
      state.searchResults = searchResults;
    }
  },
  actions: {
    fillSearchList({commit}, searchResults) {
      commit('FILL_SEARCH_LIST', searchResults);
    }
  }
});