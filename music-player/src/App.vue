<template>
  <div id="app">
    <header class="app-Header">
      <a class="app-Header_Logo" href="/">
        <img src="./assets/logo.png">
      </a>
    </header>
  </div>
</template>

<script>

export default {
  name: 'app',
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
