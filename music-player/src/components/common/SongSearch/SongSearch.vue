<template>
  <div class="app-SongSearch">
    <input
      class="app-Forms_Search"
      type="search"
      v-model="searchQuery"
      @keyup="searchSongs(searchQuery)"
      placeholder="Búsqueda"
    >
    <div class="app-SongSearch_Results">
      <song-list
        :list-content="getSearchResults"
      >
      </song-list>
    </div>
  </div>
</template>

<script>
import { search } from '@/api';
import { mapGetters } from 'vuex';
import SongList from 'components/common/SongList/SongList.vue';

export default {
  name: 'song-search',
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    searchSongs(query) {
      search(query).then((response) => {
        console.log(response);
        const apiResponse = response.data.data.map(song => ({
          title: song.title,
          artwork: song.album.cover_medium,
          artist: song.artist.name,
          songID: song.id,
          artistID: song.artist.id,
          stream: song.preview,
        }));
        this.$store.dispatch('fillSearchList', apiResponse);
      })
    }
  },
  computed: {
    ...mapGetters([
      'getSearchResults',
    ]),
  },
  components: {
    SongList,
  }
}
</script>

<style lang="scss">
@import './SongSearch.scss';
</style>