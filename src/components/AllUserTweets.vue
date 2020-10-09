<template>
  <div>
    <div id="show-tweets">
      <h3 id="show-tweets-btn" @click="showUserTweets">
        Show All NERDRS
      </h3>
      <div id="tweet-container" v-for="tweet in tweets" :key="tweet.tweetId">
        <h2 id="tweet-user">
          <strong>{{ tweet.username }}</strong>
        </h2>
        <br />
        <h4 id="tweet-content">{{ tweet.content }}</h4>
        <br />
        <p id="tweet-created">Created on: {{ tweet.createdAt }}</p>
        <tweet-likes :tweetId="tweet.tweetId" />
        <div id="delete-edit-post">
          <div id="follow-unfollow-btn">
            <button id="delete-tweet" @click="deleteTweet(tweet.tweetId)">
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
        <hr />
        <tweet-comment :tweetId="tweet.tweetId" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import TweetLikes from "../components/TweetLikes.vue";
import TweetComment from "../components/Comment.vue";

export default {
  name: "show-all-tweets",
  components: {
    TweetLikes,
    TweetComment
  },
  data() {
    return {
      tweets: [],
      loginToken: cookies.get("loginToken")
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
  color: #f56476;
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
  margin-bottom: 5vh;
  text-align: center;
}
#show-tweets-btn:hover {
  transform: scale(0.9);
}
#delete-tweet {
  background-color: #4ecca3;
  color: black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 80%;
  text-align: center;
  margin: 1vh;
}
#delete-tweet:hover {
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
  width: 80%;
  text-align: center;
  margin: 1vh;
}
#follow-unfollow-btn {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
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
  width: 80%;
  text-align: center;
  margin: 1vh;
}
#tweet-btn-follow:hover {
  transform: scale(0.9);
}
#tweet-container {
  border: 1px solid #f56476;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
  background-color: #373f51;
  width: 80%;
  margin-left: 10%;
}
hr {
  margin: 2vh;
  background-color: #f56476;
}
#heart {
  width: 10%;
  margin-top: 1vh;
}
#homepage-title {
  margin: 3vh;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #f56476;
}
#tweet-user {
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
    width: 50%;
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
    width: 50%;
    text-align: center;
    margin: 1vh;
  }
  #tweet-btn-unfollow:hover {
    transform: scale(0.9);
  }
  #delete-tweet {
    background-color: #4ecca3;
    color: black;
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
  #delete-tweet:hover {
    transform: scale(0.9);
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #tweet-container {
    border: 1px solid #f56476;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    width: 75%;
    margin-left: 12.5%;
    margin-top: 5vh;
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
  #delete-tweet {
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
  #delete-tweet:hover {
    transform: scale(0.9);
  }
}
</style>
