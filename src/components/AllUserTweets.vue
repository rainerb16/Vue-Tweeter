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
        <div id="update-container">
          <textarea
            type="text"
            id="tweet-post"
            v-model="updateTweetContent"
            placeholder="Update your NERDR. Max 200 characters"
          />
        </div>
        <div></div>
        <div id="delete-edit-post">
          <button id="edit-tweet" @click="updateTweet(tweet.tweetId)">
            Update
          </button>
          <button id="delete-tweet" @click="deleteTweet(tweet.tweetId)">
            Delete
          </button>
        </div>
        <follow-unfollow-btn :tweetId="tweet.tweetId" />
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
import FollowUnfollowBtn from "../components/FollowUnfollowBtn.vue";

export default {
  name: "show-all-tweets",
  components: {
    TweetLikes,
    TweetComment,
    FollowUnfollowBtn
  },
  props: {
    tweetId: Number
  },
  data() {
    return {
      tweets: [],
      loginToken: cookies.get("loginToken"),
      userId: cookies.get("userId"),
      updateTweetContent: ""
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
            tweetId: tweetId
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
* {
  margin: 0;
  padding: 0;
}
#update-container {
  display: grid;
  align-items: center;
  justify-items: center;
}
#show-tweets {
  margin-bottom: 5vh;
  font-family: "Arimo", sans-serif;
  color: #783030;
}
#show-tweets-btn {
  background-color: #f0f0f0;
  color: black;
  border: 1px solid black;
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
#delete-edit-post {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
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
  width: 50%;
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
  width: 50%;
  text-align: center;
  margin: 1vh;
}
#edit-tweet:hover {
  transform: scale(0.9);
}

#tweet-container {
  border: 1px solid black;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
  background-color: #f0f0f0;
  width: 80%;
  margin-left: 10%;
  hr {
    margin: 2vh;
    background-color: black;
  }
  #heart {
    width: 10%;
    margin-top: 1vh;
  }
  #homepage-title {
    margin: 3vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #783030;
  }
  #tweet-user {
    color: #783030;
  }

  // TABLET
  @media only screen and (min-width: 670px) {
    #update-container {
      display: grid;
      align-items: center;
      justify-items: center;
    }
    #show-tweets-btn {
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
    #show-tweets-btn:hover {
      transform: scale(0.9);
    }
    #tweet-btn-follow {
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
    #tweet-btn-follow:hover {
      transform: scale(0.9);
    }
    #tweet-btn-unfollow {
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
    #tweet-btn-unfollow:hover {
      transform: scale(0.9);
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
      width: 50%;
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
      width: 50%;
      text-align: center;
      margin: 1vh;
    }
    #edit-tweet:hover {
      transform: scale(0.9);
    }
  }

  // DESKTOP
  @media only screen and (min-width: 1020px) {
    #update-container {
      display: grid;
      align-items: center;
      justify-items: center;
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
    #tweet-btn-follow {
      background-color: #f0f0f0;
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
      background-color: #f0f0f0;
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
      background-color: #f0f0f0;
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
    #edit-tweet {
      background-color: #f0f0f0;
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
    #edit-tweet:hover {
      transform: scale(0.9);
    }
  }
}
</style>
