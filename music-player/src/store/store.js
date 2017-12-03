import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    audio: '',
    searchResults: [],
    isPlaying: false,
    isPaused: false,
    selectedSong: {},
  },
  getters: {
    getSearchResults: state => {
      return state.searchResults;
    },
    getSelectedSong: state => {
      return state.selectedSong;
    },
    songIsPlaying: state => {
      return state.isPlaying;
    }
  },
  mutations: {
    FILL_SEARCH_LIST(state, searchResults) {
      state.searchResults = searchResults;
    },
    PLAY_SONG(state, song) {
      state.isPlaying = true;
      state.isPaused = false;
      if (song) {
        state.selectedSong = song;
        state.audio.addEventListener('loadeddata', () => {
          state.audio.play();
        });
      } else {
        state.audio.play();
      }
    },
    PAUSE_SONG(state) {
      state.isPlaying = false;
      state.isPaused = true;
      state.audio.pause();
    },
    GET_AUDIO(state, audio) {
      state.audio = audio;
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