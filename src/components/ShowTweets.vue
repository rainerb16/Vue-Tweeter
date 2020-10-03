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
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

  export default {
    name: "show-tweets-page",
    data() {
      return {
        tweets: []
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
#tweet-container {
  border: 1px solid #0d3955;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
}
</style>