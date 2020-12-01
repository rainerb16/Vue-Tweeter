<template>
  <div id="create-comments">
    <textarea
      type="text"
      id="comment"
      v-model="commentContent"
      placeholder="Max 150 characters"
    />
    <br />
    <img
      id="post-comment-btn"
      src="../assets/edit-comment.png"
      alt="Post Comment Icon"
      @click="createComment"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "create-comment",
  data() {
    return {
      userId: cookies.get("userId"),
      commentContent: ""
    };
  },
  props: {
    tweetId: Number
  },
  methods: {
    createComment: function() {
      axios
        .request({
          method: "POST",
          url: "https://nerdr.ml/api/comments",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: this.tweetId,
            content: this.commentContent
          }
        })
        .then(response => {
          console.log(response);
          this.commentContent = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#create-comments {
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 2vh;
}
#post-comment-btn {
  width: 7%;
  margin-bottom: 5vh;
  cursor: pointer;
}
</style>
