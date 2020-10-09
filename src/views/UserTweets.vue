<template>
  <div>
    <nav-bar-section />
    <div v-if="loginToken != undefined">
      <create-tweet />
      <div id="show-tweets">
        <h3 id="show-tweets-btn" @click="showUserTweets">Show All NERDRS</h3>
        <div id="tweet-container" v-for="tweet in tweets" :key="tweet.tweetId">
          <h2 id="tweet-user">
            <strong>{{ tweet.username }}</strong>
          </h2>
          <br />
          <h4>{{ tweet.content }}</h4>
          <br />
          <p>Created on: {{ tweet.createdAt }}</p>
          <tweet-likes :tweetId="tweet.tweetId" />
          <div id="delete-edit-post">
            <div id="follow-unfollow-btn">
              <button id="tweet-btn-unfollow" @click="followUser(tweet.userId)">
                Follow
              </button>
              <button id="tweet-btn-follow" @click="unfollowUser(tweet.userId)">
                Unfollow
              </button>
            </div>
          </div>
          <hr />
          <tweet-comment :tweetId="tweet.tweetId" />
        </div>
      </div>
    </div>
    <div id="login-error" v-else>
      <error-message />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import NavBarSection from "../components/NavBar.vue";
import TweetComment from "../components/Comment.vue";
import CreateTweet from "../components/CreateTweet.vue";
import TweetLikes from "../components/TweetLikes.vue";
import ErrorMessage from "../components/404error.vue";

export default {
  name: "user-tweets-page",
  components: {
    NavBarSection,
    TweetComment,
    CreateTweet,
    TweetLikes,
    ErrorMessage
  },
  data() {
    return {
      tweets: [],
      loginToken: cookies.get("loginToken"),
      updatePost: ""
    };
  },
  methods: {
    showUserTweets: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          }
        })
        .then(response => {
          this.tweets = response.data;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTweet: function(tweetId) {
      axios
        .request({
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
    },
    followUser: function(userId) {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            followId: userId
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    unfollowUser: function(userId) {
      axios
        .request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            followId: userId
          }
        })
        .then(response => {
          console.log(response);
          // this.followUser = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#show-tweets {
  margin-bottom: 5vh;
  font-family: "Arimo", sans-serif;
  color: #4ecca3;
}
#show-tweets-btn {
  background-color: #4ecca3;
  color: black;
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
#tweet-btn-unfollow {
  background-color: #4ecca3;
  color: black;
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
#tweet-btn-unfollow:hover {
  transform: scale(0.9);
}
#tweet-btn-follow {
  background-color: #4ecca3;
  color: black;
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
#tweet-btn-follow:hover {
  transform: scale(0.9);
}
#tweet-container {
  border: 1px solid #4ecca3;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
}
hr {
  margin: 2vh;
  background-color: #4ecca3;
}
#heart {
  width: 10%;
  margin-top: 1vh;
}
#homepage-title {
  margin: 3vh;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #4ecca3;
}

// TABLET
@media only screen and (min-width: 670px) {
  #show-tweets-btn {
    background-color: #4ecca3;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 20%;
    margin-left: 40%;
    text-align: center;
  }
  #show-tweets-btn:hover {
    transform: scale(0.9);
  }
  #tweet-btn-follow {
    background-color: #4ecca3;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 10%;
    text-align: center;
    margin: 1vh;
  }
  #tweet-btn-follow:hover {
    transform: scale(0.9);
  }
  #tweet-btn-unfollow {
    background-color: #4ecca3;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 10%;
    text-align: center;
    margin: 1vh;
  }
  #tweet-btn-unfollow:hover {
    transform: scale(0.9);
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #tweet-container {
    border: 1px solid #4ecca3;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    width: 75%;
    margin-left: 12.5%;
    margin-top: 5vh;
  }
}
</style>
