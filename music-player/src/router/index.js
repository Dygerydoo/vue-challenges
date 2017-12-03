import Vue from 'vue';
import Router from 'vue-router';

import Home from 'components/Home/Home.vue';
import ArtistProfile from 'components/ArtistProfile/ArtistProfile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/artist/:artistID/:artistName?',
      name: 'artist',
      component: ArtistProfile,
    }
  ],
});