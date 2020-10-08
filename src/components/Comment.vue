<template>
  <div>
    <div id="comments-container">
      <br>
      <p>Comments:</p>
      <textarea type="text" id="comment" v-model="comment" />
      <br>
      <div id="comments-container">
        <div id="comment-btn" @click="createComment">Post Comment</div>
        <div id="comment-btn" @click="showComments">Show Comments:</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

  export default {
    name: "tweet-comment",
    props: {
      tweetId: Number
    },
    data() {
      return {
        comment: ""
      }
    },
    methods: {
      createComment: function() {
        axios.request({
          method: "POST",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: this.tweetId,
            content: this.comment
          }
        }).then((response) => {
            console.log(response);
            this.comment = "";
        }).catch((error) => {
            console.log(error);
        });
      },
      showComments: function() {
        axios.request({
          method: "GET",
          url: "https://tweeterest.ml/api/comments",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            tweetId: this.tweetId
          }
        }).then((response) => {
          console.log(response);
          this.commentId = "";
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
hr {
  margin: 2vh;
  background-color: #0d3955;
}
#comments-container {
  margin-top: 2vh;
  display: grid;
  align-items: center;
  justify-items: center;
}
#tweet-btn {
  background-color: #1da1f2;
  color: white;
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
#comment-btn {
  background-color: #1da1f2;
  color: white;
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
#comment-btn:hover {
  transform: scale(0.9);
}
</style>