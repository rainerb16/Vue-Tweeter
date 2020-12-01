<template>
  <div class="edit-comment-container">
    <textarea
      type="text"
      id="comment"
      v-model="updateCommentContent"
      placeholder="Max 150 characters"
    />
    <img
      class="edit-comment-btn"
      src="../assets/edit-comment.png"
      @click="editComment"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "update-comment",
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      updateCommentContent: ""
    };
  },
  props: {
    commentId: Number
  },
  methods: {
    editComment: function() {
      axios
        .request({
          method: "PATCH",
          url: "https://nerdr.ml/api/comments",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            commentId: this.commentId,
            content: this.updateCommentContent
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
//MOBILE
.edit-comment-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 5fr 1fr;
}
.edit-comment-btn {
  width: 60%;
  cursor: pointer;
}

// TABLET
@media only screen and (min-width: 670px) {
  .edit-comment-btn {
    width: 30%;
    cursor: pointer;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  .edit-comment-btn {
    width: 25%;
    cursor: pointer;
  }
}
</style>
