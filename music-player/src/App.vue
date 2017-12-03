<template>
  <div id="app">
    <header class="app-Header">
      <router-link
        class="app-Header_Logo"
        :to="{ name: 'home' }"
      >
        <img src="./assets/logo.png">
      </router-link>
      <song-search></song-search>
    </header>
    <router-view></router-view>
    <player-bar
      :song="getSelectedSong"
    >
    </player-bar>
  </div>
</template>

<script>
import SongSearch from 'components/common/SongSearch/SongSearch.vue';
import PlayerBar from 'components/common/Player/PlayerBar.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'getSelectedSong',
    ]),
  },
  components: {
    SongSearch,
    PlayerBar,
  }
}
</script>

<style lang="scss">
@import '~@/assets/stylesheets/foundation/config';
@import '~@/assets/stylesheets/foundation/helpers';

body {
  background: $grey-lightest;
  margin: 0;
}

#app {
  margin-bottom: 120px;
  font-family: $font-family-primary;
}

[v-cloak] {
  display: none;
}

.app-Header {
  display: flex;
  height: 60px;
  background: $white;
  box-shadow: $box-shadow-default;
}

.app-Header_Logo {
  align-self: center;
  margin: 0 1em;

  img {
    max-height: 30px;
  }
}
</style>
