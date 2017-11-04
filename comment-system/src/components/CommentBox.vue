<template>
  <div class="app-CommentBox">
      <div class="app-CommentBox_List">
        <app-single-comment
          v-for="(comment, index) in comments"
          :comment="comment"
          :index="index"
          :key="index"
        >
        </app-single-comment>
      </div>
    </div>
</template>

<script>
import AppSingleComment from './SingleComment.vue';

export default {
  name: 'app-comment-box',
  data() {
    return {
      comments: [
        { user: 'Alejandro Rivas', userReference: '@alriv', message: 'Me gusta la idea' },
        { user: 'Manuel F', userReference: '@manfatu', message: 'Genial, es una estupenda idea y un avance importante' },
      ]
    }
  },
  components: {
    AppSingleComment,
  }
}
</script>

<style>
</style>
