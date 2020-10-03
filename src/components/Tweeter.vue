<template>
  <div>
    <div id="newsfeed-container">
      <h2
        id="homepage-title"
        class="animate__animated animate__lightSpeedInRight"
      >
        TWEETER
      </h2>
      <div id="tweet-create">
        <p>What's on your mind?</p>
        <input type="text" id="tweet-post" v-model="tweetBody" placeholder="max 200 characters" />
        <div></div>
        <button id="post-tweet-btn" @click="postTweet">post!</button>
      </div>
      <div id="show-tweets">
        <h3 id="show-tweets-btn" @click="showUserTweets">Show Tweets</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "tweeter-page",
  data() {
    return {
      tweetBody: "",
      loginToken: cookies.get("loginToken")
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
        data: {
          "tweetId": this.tweetId
        }
      }).then((response) => {
          console.log(response)
      }).catch((error) => {
          console.log(error)
      });
    },
    postTweet: function() {
      axios.request({
        method: "POST",
        url: "https://tweeterest.ml/api/tweets",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
        },
        params: {
          loginToken: cookies.get("loginToken")
        }
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
a:visited {
  color: black;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #0d3955;
  font-family: "Arimo", sans-serif;
}
#newsfeed-container {
  display: grid;
  align-items: center;
  justify-items: center;
  font-family: "Arimo", sans-serif;
  color: #0d3955;
}
#tweet-create {
  margin: 5vh;
  align-items: center;
  justify-items: center;
  text-align: center;
}
input {
  margin: 2vh;
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
}
#show-tweets-btn:hover {
  transform: scale(0.9);
}
#post-tweet-btn {
  margin: 2vh;
  padding: 5px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
}
#homepage-title {
  margin: 3vh;
}
</style>
