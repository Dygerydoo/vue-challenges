<template>
  <div class="app-CommentBox">
      <app-comment-form @newComment="addComment"></app-comment-form>
      <div class="app-CommentBox_List">
        <app-single-comment
          v-for="(comment, index) in comments"
          :comment="comment"
          :index="index"
          :key="index"
          @Remove="removeComment"
        >
        </app-single-comment>
      </div>
    </div>
</template>

<script>
import AppSingleComment from './SingleComment.vue';
import AppCommentForm from './CommentForm.vue';

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
    AppCommentForm,
  },
  methods: {
    removeComment(index) {
      this.comments.splice(index, 1);
    },
    addComment(user, userReference, message) {
      this.comments.push({
        user,
        userReference,
        message,
      });
    }
  }
}
</script>

<style>
</style>
