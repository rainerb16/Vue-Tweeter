<template>
  <div>
    <div id="show-tweets">
        <h3 id="show-tweets-btn" @click="getFollowers">Show Your Followers</h3>
        <br>
        <div id="tweet-container" v-for="user in users" :key="user.userId">
          <h2>{{ user.username }}</h2>
          <h3>Bio: {{ user.bio }}</h3>
          <br>
          <!-- <div id="delete-edit-post">
            <button class="tweet-btn" @click="deleteTweet(tweet.tweetId)">Delete Tweet</button>
          </div> -->
          <hr>
          <div id="update-comments">
            <textarea type="text" v-model="updatePost" />
            <br>
            <button class="tweet-btn" @click="updateTweet(tweet.tweetId)">Update Tweet</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

  export default {
    name: "followers-page",
    data() {
      return {
        loginToken: cookies.get("loginToken"),
        updatePost: "",
        likesNum: "",
        users: []
      }
    },
    methods: {
      deleteTweet: function(tweetId) {
        axios.request({
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
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
      },
      updateTweet: function(tweetId) {
        axios.request({
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
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
      },
      isLiked: function(tweetId) {
        axios.request({
          method: "POST",
          url: "https://tweeterest.ml/api/tweet-likes",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: tweetId
          }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
      },
      unLiked: function(tweetId) {
        axios.request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/tweet-likes",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: tweetId
          }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
      },
      getFollowers: function() {
        axios.request({
          method: "GET",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            userId: cookies.get("userId")
          }
        }).then((response) => {
            console.log(response);
            this.users = response.data
        }).catch((error) => {
            console.log(error);
        })
      }
    }
}
</script>

<style lang="scss" scoped>
#show-tweets {
  margin-bottom: 5vh;
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
  width: 30%;
  margin-left: 35%;
  text-align: center;
  font-family: "Arimo", sans-serif;
}
#show-tweets-btn:hover {
  transform: scale(0.9);
}
.tweet-btn {
  background-color: #1da1f2;
  color: white;
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
.tweet-btn:hover {
  transform: scale(0.9);
}
#delete-edit-post {
  align-items: center;
  justify-items: center;
  display: grid;
}
#tweet-container {
  border: 1px solid #0d3955;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
}
hr {
  margin: 2vh;
  background-color: #0d3955;
}
#heart {
  width: 10%;
  margin-top: 1vh;
}
#update-comments {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr;
}
</style>