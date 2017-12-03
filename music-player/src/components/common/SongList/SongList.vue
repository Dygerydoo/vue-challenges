<template>
  <ul class="app-SongList">
    <li class="app-SongList_Item" v-for="song in listContent">
      <album-artwork
        :artwork="song.artwork"
        :alt="song.title"
      >
      </album-artwork>
      <div class="app-SongList_ItemData">
        <p class="app-SongList_ItemTitle">{{song.title}}</p>
        <small class="app-SongSearch_ItemSubtitle">
          <router-link :to="{ name: 'home'}">{{song.artist}}</router-link>
        </small>
      </div>
      <div class="app-SongList_Buttons">
        <button
          class="app-Buttons_Primary-flatRounded"
          @click="play(song)"
        >
          <i class="material-icons">play_arrow</i>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import AlbumArtwork from 'components/common/AlbumArtwork/AlbumArtwork.vue';
export default {
  name: 'song-list',
  props: {
    listContent: {
      type: Array,
      required: true,
    }
  },
  methods: {
    play(song) {
      this.$store.dispatch('playSong', song);
    }
  },
  components: {
    AlbumArtwork,
  }
}
</script>

<style lang="scss" scoped>
@import './SongList.scss';
</style>