<template>
  <div class="app-PlayerControls">
    <button
      class="app-Buttons_Primary-rounded"
      v-if="songIsPlaying"
      @click="pauseMedia()"
    >
      <i class="material-icons">pause</i>
    </button>
    <button
      class="app-Buttons_Primary-rounded"
      v-else
      @click="playMedia()"
    >
      <i class="material-icons">play_arrow</i>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'player-controls',
  methods: {
    ...mapMutations({
      pauseMedia: 'PAUSE_SONG',
      playMedia: 'PLAY_SONG',
    })
  },
  computed: {
    ...mapGetters([
      'songIsPlaying',
    ]),
  }
}
</script>

<style lang="scss" scoped>
@import './PlayerControls.scss';
</style>