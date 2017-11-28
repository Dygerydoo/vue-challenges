<template>
  <ul class="app-SongList">
    <li class="app-SongList_Item" v-for="song in listContent">
      <div class="app-SongList_ItemData">
        <p class="app-SongList_ItemTitle">{{song.title}}</p>
        <small class="app-SongSearch_ItemSubtitle">
          <router-link :to="{ name: 'home'}">{{song.artist}}</router-link>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'song-list',
    props: {
      listContent: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './SongList.scss';
</style>