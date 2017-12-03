<template>
  <div class="app-Player">
    <div class="wrapper">
      <div
        class="app-Player_AlbumCover"
        v-if="songIsPlaying || songIsPaused"
      >
        <album-artwork
          :artwork="song.artwork"
          :alt="song.title"
          :size="90"
        >
        </album-artwork>
      </div>
      <div class="app-Player_CurrentSong">
        <p class="app-Player_SongName">
          {{song.title}}
        </p>
      </div>
    </div>
    <player-controls></player-controls>

    <div class="app-Player_SongTimer">
      <small>{{getCurrentTime | humanizeTime}}/{{getAudioDuration | humanizeTime}}</small>
    </div>
    <audio
      :src="song.stream"
      preload="auto"
    >
    </audio>
  </div>
</template>

<script>
import PlayerControls from 'components/common/Player/PlayerControls/PlayerControls.vue';
import AlbumArtwork from 'components/common/AlbumArtwork/AlbumArtwork.vue';
import { mapGetters } from 'vuex';

export default {
 name: 'player-bar',
 props: {
   song: {
     type: Object,
     required: true,
   }
 },
 methods: {
   manageAudioLoad() {
     if(this.getCurrentAudio.readyState >= 2) {
       this.$store.commit('GET_AUDIO_DURATION');
     }
   },
   currentAudioTime() {
     this.$store.commit('CURRENT_AUDIO_TIME');
   }
 },
 computed: {
   ...mapGetters([
     'songIsPaused',
     'songIsPlaying',
     'getCurrentTime',
     'getAudioDuration',
     'getCurrentAudio',
   ]),
 },
 components: {
   PlayerControls,
   AlbumArtwork,
 },
 mounted() {
   this.$store.commit('GET_AUDIO', this.$el.querySelectorAll('audio')[0]);
   this.getCurrentAudio.addEventListener('loadeddata', this.manageAudioLoad);
   this.getCurrentAudio.addEventListener('timeupdate', this.currentAudioTime);
 }
}
</script>

<style lang="scss" scoped>
@import './PlayerBar.scss';
</style>