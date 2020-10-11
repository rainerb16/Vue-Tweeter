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
          <follow-unfollow-btn />
          <div></div>
          <div id="edit-container">
            <textarea
              type="text"
              id="tweet-post"
              v-model="updateTweetContent"
              placeholder="Update your NERDR. Max 200 characters"
            />
            <div></div>
            <button id="edit-tweet" @click="updateTweet(tweet.tweetId)">
              Update
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
import TweetLikes from "../components/TweetLikes.vue";
import axios from "axios";
import cookies from "vue-cookies";
import TweetComment from "../components/Comment.vue";
import FollowUnfollowBtn from "../components/FollowUnfollowBtn.vue";

export default {
  name: "following-tweets",
  components: {
    TweetLikes,
    TweetComment,
    FollowUnfollowBtn
  },
  // props: {
  //   tweets: {
  //     type: Array,
  //     required: true
  //   }
  // },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      followedTweets: [],
      userId: cookies.get("userId"),
      tweet: "",
      updateTweetContent: "",
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
            content: this.updateTweetContent
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
}
#delete-tweet {
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
#delete-tweet:hover {
  transform: scale(0.9);
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
  width: 40%;
  text-align: center;
  margin: 1vh;
}
#edit-tweet:hover {
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
  width: 20%;
  text-align: center;
  margin: 1vh;
}
#post-tweet-btn:hover {
  transform: scale(0.9);
}
#show-following-tweets-btn {
  background-color: #f0f0f0;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 50%;
  margin-left: 23%;
  margin-bottom: 3vh;
  text-align: center;
  font-family: "Arimo", sans-serif;
}
#show-following-tweets-btn:hover {
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

#tweet-user {
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
// TABLET
@media only screen and (min-width: 670px) {
  #delete-tweet {
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
  #delete-tweet:hover {
    transform: scale(0.9);
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
  #show-following-tweets-btn {
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
  #show-following-tweets-btn:hover {
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
  #show-following-tweets-btn {
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
  #show-following-tweets-btn:hover {
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
  #delete-tweet-btn {
    background-color: #f0f0f0;
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
  #delete-tweet-btn:hover {
    transform: scale(0.9);
  }
  #delete-tweet,
  #post-tweet-btn {
    background-color: #f0f0f0;
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
  #delete-tweet:hover,
  #post-tweet-btn:hover {
    transform: scale(0.9);
  }
}
</style>
