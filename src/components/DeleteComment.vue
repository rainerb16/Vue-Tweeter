<template>
  <div>
    <img
      class="edit"
      src="../assets/delete-comment.png"
      id="delete-comment-btn"
      @click="deleteComment"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "delete-comment",
  props: {
    commentId: Number
  },
  methods: {
    deleteComment: function() {
      axios
        .request({
          method: "DELETE",
          url: "https://nerdr.ml/api/comments",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            commentId: this.commentId
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
.edit {
  width: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
}
#delete-comment-btn {
  cursor: pointer;
}

// TABLET
@media only screen and (min-width: 670px) {
  .edit {
    width: 30%;
  }
  #delete-comment-btn {
    cursor: pointer;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  .edit {
    width: 20%;
  }
  #delete-comment-btn {
    cursor: pointer;
  }
}
</style>
