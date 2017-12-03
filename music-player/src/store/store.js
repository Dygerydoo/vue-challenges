import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    audio: '',
    audioDuration: 0,
    currentTime: 0,
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
    getAudioDuration: state => {
      return state.audioDuration;
    },
    getCurrentTime: state => {
      return state.currentTime;
    },
    getCurrentAudio: state => {
      return state.audio;
    },
    songIsPlaying: state => {
      return state.isPlaying;
    },
    songIsPaused: state => {
      return state.isPaused;
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
    },
    GET_AUDIO_DURATION(state) {
      state.audioDuration = state.audio.duration;
    },
    CURRENT_AUDIO_TIME(state) {
      state.currentTime = state.audio.currentTime;
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