<template>
  <div>
    <div>
      <h2
        id="homepage-title"
        class="animate__animated animate__lightSpeedInRight"
      >
        YOUR<br /><span id="nerdr">NERDR</span><br />FEED
      </h2>
      <create-tweet />
      <div id="button-container">
        <button class="show-following-tweets-btn" @click="showFollowingTweets">
          VIEW YOUR NERDRS
        </button>
        <button
          class="show-following-tweets-btn"
          @click="showCurrentUserTweets"
        >
          VIEW YOUR NERDS
        </button>
      </div>
      <div id="tweet-container" v-for="tweet in tweets" :key="tweet.tweetId">
        <h2 class="tweet-user">
          <strong>{{ tweet.username }}</strong>
        </h2>
        <br />
        <h4>{{ tweet.content }}</h4>
        <br />
        <p>Created on: {{ tweet.createdAt }}</p>
        <tweet-likes :tweetId="tweet.tweetId" />
        <div class="delete-follow-container">
          <delete-tweet
            class="delete-btn"
            v-if="userId == tweet.userId"
            :tweetId="tweet.tweetId"
          />
          <follow-unfollow-btn class="follow-btn" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <update-tweet v-if="userId == tweet.userId" :tweetId="tweet.tweetId" />
        <span></span>
        <hr />
        <tweet-comment :tweetId="tweet.tweetId" />
      </div>
    </div>
  </div>
</template>

<script>
import CreateTweet from "../components/CreateTweet.vue";
import TweetLikes from "../components/TweetLikes.vue";
import DeleteTweet from "../components/DeleteTweet.vue";
import axios from "axios";
import cookies from "vue-cookies";
import TweetComment from "../components/Comment.vue";
import FollowUnfollowBtn from "../components/FollowUnfollowBtn.vue";
import UpdateTweet from "../components/UpdateTweet.vue";

export default {
  name: "following-tweets",
  components: {
    CreateTweet,
    TweetLikes,
    TweetComment,
    FollowUnfollowBtn,
    UpdateTweet,
    DeleteTweet
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      followedTweets: [],
      userId: cookies.get("userId"),
      tweets: []
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
          console.log(response);
          this.followedTweets = response.data;
          for (let i = 0; i < this.followedTweets.length; i++) {
            axios
              .request({
                method: "GET",
                url: "https://tweeterest.ml/api/tweets",
                headers: {
                  "Content-Type": "application/json",
                  "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
                },
                params: {
                  userId: this.followedTweets[i].userId
                }
              })
              .then(response => {
                this.tweets = this.tweets.concat(response.data);
              })
              .catch(error => {
                console.log(error);
              });
          }
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
    }
  },
  mounted: function() {
    this.showFollowingTweets();
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
  color: #783030;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #783030;
  font-family: "Arimo", sans-serif;
}
hr {
  margin: 7vh;
  background-color: black;
  height: 1px;
}
#homepage-title {
  margin: 3vh;
  text-align: center;
  align-items: center;
  justify-items: center;
  color: #783030;
  font-family: "Arimo", sans-serif;
}
.delete-btn {
  cursor: pointer;
  width: 60%;
}
.follow-btn {
  width: 45%;
}
#edit-tweet {
  background-color: #f0f0f0;
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
#edit-tweet:hover {
  transform: scale(0.9);
}
.delete-follow-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 3fr 3fr 2fr 4fr 4fr;
}
.show-following-tweets-btn {
  background-color: #f0f0f0;
  color: black;
  border: 1px solid black;
  box-shadow: 3px 5px 5px darkgray;
  padding: 3px;
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
.show-following-tweets-btn:hover {
  transform: scale(0.9);
}
#tweet-container {
  border: 1px solid black;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
}
hr {
  margin: 2vh;
  background-color: black;
}

.tweet-user {
  color: #783030;
}
h4,
p {
  color: black;
}
#edit-container {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
}
#nerdr {
  font-family: "Press Start 2P", cursive;
  color: black;
  font-size: 20px;
}
// TABLET
@media only screen and (min-width: 670px) {
  #edit-tweet {
    background-color: #f0f0f0;
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
  #edit-tweet:hover {
    transform: scale(0.9);
  }
  .show-following-tweets-btn {
    background-color: #f0f0f0;
    color: black;
    border: 1px solid black;
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
  .show-following-tweets-btn:hover {
    transform: scale(0.9);
  }
  #post-tweet-btn {
    background-color: #f0f0f0;
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
  #post-tweet-btn:hover {
    transform: scale(0.9);
  }
  #nerdr {
    font-family: "Press Start 2P", cursive;
    color: black;
    font-size: 22px;
  }
  .delete-follow-container {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 2fr 2fr 2fr 6fr 6fr;
  }
  .follow-btn {
    width: 7%;
  }
  .delete-btn {
    cursor: pointer;
    width: 60%;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #tweeter-discover {
    font-family: "Arimo", sans-serif;
    color: black;
  }
  #edit-tweet {
    background-color: #f0f0f0;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 13%;
    text-align: center;
    margin: 1vh;
  }
  #edit-tweet:hover {
    transform: scale(0.9);
  }
  #homepage-title {
    margin: 3vh;
    text-align: center;
    align-items: center;
    justify-items: center;
  }
  .show-following-tweets-btn {
    background-color: #f0f0f0;
    color: black;
    border: 1px solid black;
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
  .show-following-tweets-btn:hover {
    transform: scale(0.9);
  }
  #tweet-container {
    border: 1px solid black;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    width: 75%;
    margin-left: 12.5%;
    margin-top: 5vh;
  }
  hr {
    margin: 2vh;
    background-color: black;
  }
  #nerdr {
    font-family: "Press Start 2P", cursive;
    color: black;
    font-size: 21px;
  }
}
</style>
