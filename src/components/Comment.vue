<template>
  <div>
    <div id="comments-container">
      <p id="title-comment">Comments:</p>
      <create-comment :tweetId="tweetId" />
      <div id="comment-btn" @click="showComments">Show Comments</div>
    </div>
    <div
      id="user-comments"
      v-for="comment in comments"
      :key="comment.commentId"
    >
      <h2 class="user-username">{{ comment.username }}</h2>
      <p class="user-comment-content">{{ comment.content }}</p>
      <p class="user-created-on">Created On: {{ comment.createdAt }}</p>
      <comment-likes :commentId="comment.commentId" />
      <div class="edit-delete-container">
        <update-comment
          v-if="userId == comment.userId"
          :commentId="comment.commentId"
        />
        <delete-comment
          v-if="userId == comment.userId"
          :commentId="comment.commentId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommentLikes from "../components/CommentLikes.vue";
import axios from "axios";
import cookies from "vue-cookies";
import UpdateComment from "../components/UpdateComment.vue";
import CreateComment from "../components/CreateComment.vue";
import DeleteComment from "../components/DeleteComment.vue";

export default {
  name: "tweet-comment",
  components: {
    CommentLikes,
    UpdateComment,
    CreateComment,
    DeleteComment
  },
  props: {
    tweetId: Number,
    commentId: Number
  },
  data() {
    return {
      comments: [],
      userId: cookies.get("userId")
    };
  },
  methods: {
    showComments: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          this.comments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 2vh;
  background-color: black;
}
#comments-container {
  display: grid;
  align-items: center;
  justify-items: center;
}
.edit-delete-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 4fr 1fr;
  margin: 3vh 0vh 3vh 0vh;
}
#comment-btn {
  background-color: #f0f0f0;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 50%;
  text-align: center;
  margin: 1vh;
}
#comment-btn:hover {
  transform: scale(0.9);
}
#user-comments {
  margin: 2vw;
  padding: 10px;
  border: 1px solid black;
}
.user-username,
.username-comment,
.user-created-on {
  padding: 5px;
}
.user-comment-content {
  color: black;
}
.user-username {
  color: #783030;
}
#title-comment {
  color: #783030;
}

// TABLET
@media only screen and (min-width: 670px) {
  #post-comment-btn {
    width: 5%;
  }
  #comment-btn {
    width: 25%;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #comment-btn {
    width: 15%;
  }
}
</style>
