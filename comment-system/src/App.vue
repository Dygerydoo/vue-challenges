<template>
  <div id="app">
    <article>
      <h1 class="title">Las tarjetas de embarque serán historia</h1>
      <p>Se trata de una secuencia que los más viajeros conocen bien: tras superar el minucioso control de seguridad, toca una nueva parada en la puerta de embarque en la que hay que presentar una vez más el billete y algún documento identificativo. <a href="#">Leer más</a></p>
    </article>
    <app-comment-box></app-comment-box>
  </div>
</template>

<script>
import AppCommentBox from './components/CommentBox.vue';

export default {
  name: 'app',
  components: {
    AppCommentBox,
  }
}
</script>

<style>
#app {
  width: 80%;
  margin: 2em auto;
  border: 1px solid #ddd;
  padding: 1em;
}
</style>
