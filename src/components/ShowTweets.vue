<template>
  <div>
    <div id="show-tweets">
        <h3 id="show-tweets-btn" @click="showUserTweets">Show Tweets</h3>
        <div id="tweet-container" v-for="tweet in tweets" :key="tweet.tweetId">
          <h3 id="tweet-user"><strong>{{ tweet.username }}</strong></h3>
          <br>
          <h4>{{ tweet.content }}</h4>
          <br>
          <p>Created on: {{ tweet.created_at}}</p>
          <div id="likes-container" v-if="isLiked">
            <img id="heart" src="../assets/heart.png" @click="isLiked(tweet.tweetId)" alt="Heart Button">
          </div>
          <!-- <div id="likes-container" v-else>
            <img id="heart" src="../assets/heart.png" @click="unLiked(tweet.tweetId)" alt="Heart Button">
          </div> -->
          <br>
          <div id="delete-edit-post">
            <button class="tweet-btn" @click="deleteTweet(tweet.tweetId)">Delete Tweet</button>
            <hr>
            <br>
            <textarea type="text" v-model="updatePost" />
            <br>
            <button class="tweet-btn" @click="updateTweet(tweet.tweetId)">Update Tweet</button>
          </div>
          <!-- <tweet-comment /> -->
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
// import TweetComment from "../components/Comment.vue";

  export default {
    name: "show-tweets-page",
    components: {
      // TweetComment
    },
    data() {
      return {
        tweets: [],
        loginToken: cookies.get("loginToken"),
        updatePost: "",
        likesNum: ""
      }
    },
    methods: {
      showUserTweets: function() {
        axios.request({
          method: "GET",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            userId: cookies.get("userId")
          }
        }).then((response) => {
          this.tweets = response.data;
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
      },
      deleteTweet: function(tweetId) {
        axios.request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: tweetId,
            content: this.content
          }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
      },
      updateTweet: function(tweetId) {
        axios.request({
          method: "PATCH",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: tweetId,
            content: this.updatePost
          }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
      },
      isLiked: function(tweetId) {
        axios.request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweet-likes",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: tweetId
          }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
      },
      unLiked: function(tweetId) {
        axios.request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/tweet-likes",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: tweetId
          }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
      }
    }
}
</script>

<style lang="scss" scoped>
#show-tweets {
  margin-bottom: 5vh;
}
#show-tweets-btn {
  background-color: #1da1f2;
  color: white;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 30%;
  margin-left: 35%;
  text-align: center;
}
#show-tweets-btn:hover {
  transform: scale(0.9);
}
.tweet-btn {
  background-color: #1da1f2;
  color: white;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 30%;
  text-align: center;
  margin: 1vh;
}
.tweet-btn:hover {
  transform: scale(0.9);
}
#tweet-container {
  border: 1px solid #0d3955;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
}
hr {
  margin: 2vh;
  background-color: #0d3955;
}
#heart {
  width: 10%;
  margin-top: 1vh;
}
</style>