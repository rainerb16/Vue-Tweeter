<template>
  <div>
    <div id="comments-container">
      <br />
      <p id="title-comment">Comments:</p>
      <textarea
        type="text"
        id="comment"
        v-model="commentContent"
        placeholder="Max 150 characters"
      />
      <br />
      <div id="comments-container">
        <img
          id="post-comment-btn"
          src="../assets/edit-comment.png"
          alt="Post Comment Icon"
          @click="createComment"
        />
        <div id="comment-btn" @click="showComments">Show Comments</div>
      </div>
    </div>
    <div
      id="user-comments"
      v-for="comment in comments"
      :key="comment.commentId"
      placeholder="Max 150 characters"
    >
      <h2 id="user-username">{{ comment.username }}</h2>
      <p id="user-comment-content">{{ comment.content }}</p>
      <p id="user-created-on">Created On: {{ comment.createdAt }}</p>
      <comment-likes :commentId="comment.commentId" />
      <div v-if="comment.userId == userId">
        <textarea
          type="text"
          id="comment"
          v-model="editContent"
          placeholder="Max 150 characters"
        />
        <div v-if="comment.userId == userId" id="edit-delete">
          <img
            class="edit"
            src="../assets/edit-comment.png"
            id="edit-comment-btn"
            @click="editComment"
          />
          <img
            class="edit"
            src="../assets/delete-comment.png"
            id="delete-comment-btn"
            @click="deleteComment"
          />
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentLikes from "../components/CommentLikes.vue";
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "tweet-comment",
  components: {
    CommentLikes
  },
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comments: [],
      commentContent: "",
      editContent: "",
      userId: cookies.get("userId"),
      comment: ""
    };
  },
  methods: {
    createComment: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
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
    },
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
    },
    editComment: function() {
      axios
        .request({
          method: "PATCH",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            commentId: this.commentId,
            content: this.editContent
          }
        })
        .then(response => {
          console.log(response);
          this.editContent = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteComment: function() {
      axios
        .request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
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
hr {
  margin: 2vh;
  background-color: black;
}
.edit {
  width: 60%;
  cursor: pointer;
}
#comments-container {
  display: grid;
  align-items: center;
  justify-items: center;
}
#tweet-btn {
  background-color: #f0f0f0;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 100%;
  text-align: center;
  margin: 1vh;
}
#tweet-btn:hover {
  transform: scale(0.9);
}
#buttons {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr 2fr;
  column-gap: 10px;
}
#post-comment-btn {
  width: 7%;
  margin-bottom: 5vh;
}
#edit-delete {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 4fr 4fr;
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
#user-username,
#username-comment,
#user-created-on {
  padding: 5px;
}
#user-comment-content {
  color: black;
}
#user-username {
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
  .edit {
    width: 30%;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  .edit {
    width: 25%;
  }
}
</style>
