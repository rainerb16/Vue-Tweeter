<template>
  <div>
    <div>
      <div id="button-container">
        <h3 id="show-following-tweets-btn" @click="showFollowingTweets">
          NERDRS YOU FOLLOW
        </h3>
        <h3 id="show-following-tweets-btn" @click="showCurrentUserTweets">
          YOUR NERDS
        </h3>
      </div>

      <!-- FOLLOWERS NERDRS -->
      <div
        id="tweet-container"
        v-for="followsTweet in followsTweets"
        :key="followsTweet.tweetId"
      >
        <h2 id="tweet-user">
          <strong>{{ followsTweet.username }}</strong>
        </h2>
        <br />

        <h4>{{ followsTweet.content }}</h4>
        <br />

        <p>Created on: {{ followsTweet.createdAt }}</p>

        <tweet-likes :tweetId="tweet.tweetId" />

        <div>
          <button id="delete-tweet-btn" @click="deleteTweet(tweet.tweetId)">
            Delete
          </button>
          <button id="tweet-btn-unfollow" @click="followUser(tweet.userId)">
            Follow
          </button>
          <button id="tweet-btn-follow" @click="unfollowUser(tweet.userId)">
            Unfollow
          </button>
        </div>
      </div>

      <!-- CURRENT USER NERDRS -->
      <div id="tweet-container" v-for="tweet in tweets" :key="tweet.tweetId">
        <h2 id="tweet-user">
          <strong>{{ tweet.username }}</strong>
        </h2>
        <br />

        <h4>{{ tweet.content }}</h4>
        <br />

        <p>Created on: {{ tweet.createdAt }}</p>

        <tweet-likes :tweetId="tweet.tweetId" />

        <div id="follow-unfollow-btn">
          <button id="delete-tweet" @click="deleteTweet(tweet.tweetId)">
            Delete
          </button>
          <div></div>
          <textarea
            type="text"
            id="tweet-post"
            v-model="updatePost"
            placeholder="Update your NERDR. Max 200 characters"
          />
          <div></div>
          <button id="post-tweet-btn" @click="updateTweet(tweet.tweetId)">
            Update NERD
          </button>
        </div>
        <hr />
        <tweet-comment :tweetId="tweet.tweetId" />
      </div>
    </div>
  </div>
</template>

<script>
import TweetLikes from "../components/TweetLikes.vue";
import axios from "axios";
import cookies from "vue-cookies";
import TweetComment from "../components/Comment.vue";

export default {
  name: "following-tweets",
  components: {
    TweetLikes,
    TweetComment
  },
  data() {
    return {
      tweets: [],
      loginToken: cookies.get("loginToken"),
      userId: cookies.get("userId"),
      followsTweets: [],
      tweet: "",
      tweetContent: "",
      updatePost: ""
    };
  },
  methods: {
    showCurrentUserTweets: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            userId: this.userId
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
    showFollowingTweets: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            userId: this.userId
          }
        })
        .then(response => {
          this.followsTweets = response.data;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkFollowers: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            userId: cookies.get("userId")
          }
        })
        .then(response => {
          console.log(response);
          this.users = response.data;
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
    }
  }
};
</script>

<style lang="scss" scoped>
// MOBILE
* {
  margin: 0;
  padding: 0;
}
a:visited {
  color: #f56476;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #4ecca3;
  font-family: "Arimo", sans-serif;
}
hr {
  margin: 7vh;
  background-color: #f56476;
  height: 1px;
}
#homepage-title {
  margin: 3vh;
  text-align: center;
  align-items: center;
  justify-items: center;
  color: #4ecca3;
}
#delete-tweet,
#post-tweet-btn {
  background-color: #4ecca3;
  color: black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 40%;
  text-align: center;
  margin: 1vh;
}
#delete-tweet:hover,
#post-tweet-btn:hover {
  transform: scale(0.9);
}
#show-following-tweets-btn {
  background-color: #4ecca3;
  color: black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 40%;
  margin-left: 30%;
  margin-bottom: 3vh;
  text-align: center;
  font-family: "Arimo", sans-serif;
}
#show-following-tweets-btn:hover {
  transform: scale(0.9);
}
#tweet-container {
  border: 1px solid #f56476;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
}
hr {
  margin: 2vh;
  background-color: #f56476;
}
#tweet-btn-unfollow,
#delete-tweet-btn {
  background-color: #4ecca3;
  color: black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 20%;
  text-align: center;
  margin: 1vh;
}
#tweet-btn-unfollow:hover,
#delete-tweet-btn:hover {
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
  width: 20%;
  text-align: center;
  margin: 1vh;
}
#tweet-btn-follow:hover {
  transform: scale(0.9);
}
#tweet-user {
  color: #4ecca3;
}
h4,
p {
  color: #f56476;
}
#follow-unfollow-btn {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
}
textarea {
  margin-top: 5vh;
}
// TABLET
@media only screen and (min-width: 670px) {
  #show-following-tweets-btn {
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
  #show-following-tweets-btn:hover {
    transform: scale(0.9);
  }
  #delete-tweet,
  #post-tweet-btn {
    background-color: #4ecca3;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 20%;
    text-align: center;
    margin: 1vh;
  }
  #delete-tweet:hover,
  #post-tweet-btn:hover {
    transform: scale(0.9);
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #tweeter-discover {
    font-family: "Arimo", sans-serif;
    color: #f56476;
  }
  #homepage-title {
    margin: 3vh;
    text-align: center;
    align-items: center;
    justify-items: center;
  }
  #show-following-tweets-btn {
    background-color: #4ecca3;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 10%;
    margin-left: 45%;
    text-align: center;
  }
  #show-following-tweets-btn:hover {
    transform: scale(0.9);
  }
  #tweet-container {
    border: 1px solid #f56476;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    width: 75%;
    margin-left: 12.5%;
    margin-top: 5vh;
  }
  hr {
    margin: 2vh;
    background-color: #f56476;
  }
  #tweet-btn-unfollow,
  #delete-tweet-btn {
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
  #tweet-btn-unfollow:hover,
  #delete-tweet-btn:hover {
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
  #delete-tweet,
  #post-tweet-btn {
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
  #delete-tweet:hover,
  #post-tweet-btn:hover {
    transform: scale(0.9);
  }
}
</style>
