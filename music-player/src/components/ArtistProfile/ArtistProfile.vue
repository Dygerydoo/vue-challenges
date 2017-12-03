<template>
  <article class="app-ArtistProfile">
    <figure class="app-ArtistProfile_Avatar">
      <img
        :src="getArtistData.picture_medium"
        :alt="getArtistData.name"
      >
    </figure>
    <div class="app-ArtistProfile_Content">
      <div class="app-ArtistProfile_Bio">
        <h1 class="app-ArtistProfile_UserName">
          <strong>{{getArtistData.name}}</strong>
        </h1>
      </div>
    </div>
  </article>
</template>

<script>
import { fetchUser } from '@/api';
import { mapGetters } from 'vuex';

export default {
  name: 'artist-profile',
  methods: {
    fetchUserData() {
      fetchUser(this.$route.params.artistID)
      .then((response) => {
        this.$store.dispatch('fillArtistData', response.data);
      });
    }
  },
  watch: {
    $route: 'fetchUserData',
  },
  created() {
    this.fetchUserData();
  },
  computed: {
    ...mapGetters([
      'getArtistData',
    ]),
  }
}
</script>

<style lang="scss" scoped>
@import './ArtistProfile.scss';
</style>