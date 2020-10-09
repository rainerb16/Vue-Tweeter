<template>
  <div>
    <div id="newsfeed-container">
      <h2
        id="homepage-title"
        class="animate__animated animate__lightSpeedInRight"
      >
        NERDR FEED
      </h2>
      <div id="tweet-create">
        <p id="title">What's on your mind?</p>
        <textarea
          type="text"
          id="tweet-post"
          v-model="tweetContent"
          placeholder="max 200 characters"
        />
        <div></div>
        <button id="post-tweet-btn" @click="postTweet">Post NERD</button>
        <button id="post-tweet-btn" @click="postTweet">Update NERD</button>
      </div>
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
      updatePost: ""
    };
  },
  methods: {
    postTweet: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweets",
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
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateTweet: function(tweetId) {
      axios
        .request({
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
a:visited {
  color: black;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #f56476;
  font-family: "Arimo", sans-serif;
}
#newsfeed-container {
  display: grid;
  align-items: center;
  justify-items: center;
  font-family: "Arimo", sans-serif;
  color: #f56476;
}
#title {
  margin: 10px;
}
#tweet-create {
  margin: 5vh;
  align-items: center;
  justify-items: center;
  text-align: center;
}
#tweet-post {
  text-align: center;
}
input {
  margin: 2vh;
}
#show-tweets-btn {
  background-color: #f56476;
  color: black;
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
  color: #4ecca3;
}
</style>
