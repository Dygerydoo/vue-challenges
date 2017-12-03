<template>
  <div class="app-Player">
    <player-controls></player-controls>
    <audio
      :src="song.stream"
      preload="auto"
    >
    </audio>
  </div>
</template>

<script>
import PlayerControls from 'components/common/Player/PlayerControls/PlayerControls.vue';

export default {
 name: 'player-bar',
 props: {
   song: {
     type: Object,
     required: true,
   }
 },
 components: {
   PlayerControls,
 },
 mounted() {
   this.$store.commit('GET_AUDIO', this.$el.querySelectorAll('audio')[0]);
 }
}
</script>

<style lang="scss" scoped>
@import './PlayerBar.scss';
</style>