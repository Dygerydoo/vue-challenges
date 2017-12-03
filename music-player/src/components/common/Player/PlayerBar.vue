<template>
  <div class="app-Player">
    <audio
      :src="song.stream"
      preload="auto"
    >
    </audio>
  </div>
</template>

<script>
export default {
 name: 'player-bar',
 props: {
   song: {
     type: Object,
     required: true,
   }
 },
 mounted() {
   this.$store.commit('GET_AUDIO', this.$el.querySelectorAll('audio')[0]);
 }
}
</script>

<style lang="scss" scoped>
@import './PlayerBar.scss';
</style>