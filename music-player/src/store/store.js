import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchResults: [],
    isPlaying: false,
    isPaused: false,
    selectedSong: {},
  },
  getters: {
    getSearchResults: state => {
      return state.searchResults;
    }
  },
  mutations: {
    FILL_SEARCH_LIST(state, searchResults) {
      state.searchResults = searchResults;
    },
    PLAY_SONG(state, song) {
      state.isPlaying = true;
      state.isPaused = false;
      state.selectedSong = song;
    }
  },
  actions: {
    fillSearchList({commit}, searchResults) {
      commit('FILL_SEARCH_LIST', searchResults);
    },
    playSong({commit}, song) {
      commit('PLAY_SONG', song);
    }
  }
});