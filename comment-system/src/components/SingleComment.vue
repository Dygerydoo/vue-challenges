<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="http://bulma.io/images/placeholders/128x128.png">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ comment.user }}</strong> <small>{{ comment.userReference }}</small>
          <br>
          {{ comment.message }}
        </p>
      </div>
    </div>
    <div class="media-right">
    </div>
  </article>
</template>

<script>
export default {
  name: 'app-single-comment',
  props: {
    comment: {
      type: Object,
      default: function() {
        return { message: 'Text por defecto' }
      },
      required: true,
    },
    index: {
      type: Number,
      default: 100,
      required: true,
    }
  }
}
</script>

<style>
</style>
