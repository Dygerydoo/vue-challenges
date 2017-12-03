<template>
  <div
    class="app-AlbumArtwork"
    :style="`width: ${size}px; height: ${size}px`"
  >
    <img :src="artwork" :alt="alt">
  </div>
</template>

<script>
  export default {
    name: 'album-artwork',
    props: {
      artwork: {
        type: String,
        default: 'http://www.langitmusik.co.id/images/now_playing.jpg',
      },
      size: {
        type: Number,
        default: 45,
      },
      alt: {
        type: String,
        default: 'Album cover',
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './AlbumArtwork.scss';
</style>