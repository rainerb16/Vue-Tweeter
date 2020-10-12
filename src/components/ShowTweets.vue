<template>
  <div>
    <div id="show-tweets">
      <div id="tweet-container" v-for="tweet in tweets" :key="tweet.tweetId">
        <h2 id="tweet-user">
          <strong>{{ tweet.username }}</strong>
        </h2>
        <br />
        <h4 id="tweet-content">{{ tweet.content }}</h4>
        <br />
        <p id="tweet-content">Created on: {{ tweet.createdAt }}</p>
        <tweet-likes :tweetId="tweet.tweetId" />
        <div id="follow-unfollow-btn">
          <delete-tweet
            v-if="userId == tweet.userId"
            :tweetId="tweet.tweetId"
          />
          <follow-unfollow-btn />
        </div>
        <hr />
        <tweet-comment :tweetId="tweet.tweetId" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TweetLikes from "../components/TweetLikes.vue";
import DeleteTweet from "../components/DeleteTweet.vue";
import FollowUnfollowBtn from "../components/FollowUnfollowBtn.vue";
import TweetComment from "../components/Comment.vue";
import cookies from "vue-cookies";

export default {
  name: "show-tweets",
  components: {
    TweetLikes,
    DeleteTweet,
    FollowUnfollowBtn,
    TweetComment
  },
  data() {
    return {
      tweets: [],
      userId: cookies.get("userId")
    };
  },
  mounted: function() {
    this.showUserTweets();
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
    }
  }
};
</script>

<style lang="scss" scoped>
#tweet-container {
  border: 1px solid black;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
  background-color: #f0f0f0;
  width: 90%;
}
#tweet-content {
  color: black;
}
#tweet-user {
  color: #783030;
}
#show-tweets {
  display: grid;
  align-items: center;
  justify-items: center;
}
#follow-unfollow-btn {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 4fr;
  width: 75%;
}
hr {
  margin: 3vh;
  background-color: black;
  height: 1px;
}

// TABLET
@media only screen and (min-width: 670px) {
  // #refresh-tweet {
  //   background-color: #f0f0f0;
  //   color: black;
  //   padding: 10px;
  //   border-radius: 7%;
  //   cursor: pointer;
  //   transform: perspective(1px) translateZ(0);
  //   transition-duration: 0.3s;
  //   transition-property: transform;
  //   margin-bottom: 3vh;
  //   text-align: center;
  //   align-items: center;
  //   justify-items: center;
  // }
  // #refresh-tweet:hover {
  //   transform: scale(0.9);
  // }
  hr {
    margin: 7vh;
    background-color: black;
    height: 1px;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #tweet-container {
    border: 1px solid black;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    background-color: #f0f0f0;
    width: 75%;
  }
}
</style>
