<template>
  <div>
    <div id="newsfeed-container">
      <h2 id="title">What's on your mind?</h2>
      <textarea
        type="text"
        id="tweet-post"
        v-model="tweetContent"
        placeholder="Max 200 characters"
      />
      <div></div>
      <button id="post-tweet-btn" @click="postTweet">Post NERD</button>
      <h4>{{ tweetStatus }}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "create-tweet-page",
  data() {
    return {
      tweetContent: "",
      tweetStatus: ""
    };
  },
  methods: {
    postTweet: function() {
      this.tweetStatus = "Posting...";
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            content: this.tweetContent
          }
        })
        .then(response => {
          console.log(response);
          this.tweetStatus = "Posted!";
        })
        .catch(error => {
          console.log(error);
          this.tweetStatus = "There was an error... please try again.";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#newsfeed-container {
  display: grid;
  align-items: center;
  justify-items: center;
  font-family: "Arimo", sans-serif;
  color: black;
}
#title {
  margin: 10px;
}
#tweet-post {
  display: grid;
  text-align: center;
  align-items: center;
  justify-items: center;
}
#title {
  margin: 10px;
  font-family: "Arimo", sans-serif;
  color: #783030;
}
#post-tweet-btn {
  margin: 2vh;
  padding: 5px;
  width: 30%;
  box-shadow: 3px 5px 5px darkgray;
  border: 1px solid black;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
}
#post-tweet-btn:hover {
  transform: scale(0.9);
}
</style>
