<template>
  <div id="tweeter-discover">
    <div v-if="loginToken != undefined">
      <nav-bar-section />
      <h2
        id="homepage-title"
        class="animate__animated animate__lightSpeedInRight">
        TWEETER DISCOVER
      </h2>
      <div id="tweets-container">
        <h3 id="show-tweets-btn" @click="showUserTweets">Show All Users</h3>
          <div id="tweet-container" v-for="tweet in tweets" :key="tweet.tweetId">
            <h2 id="tweet-user"><strong>{{ tweet.username }}</strong></h2>
            <br>
            <h4>{{ tweet.content }}</h4>
            <br>
            <p>Created on: {{ tweet.createdAt }}</p> 
            <div id="delete-edit-post">
              <div v-if="unfollowUser">
                <button class="tweet-btn" @click="unfollowUser(tweet.userId)">Unfollow</button>
              </div>
              <div v-else>
                <button class="tweet-btn" @click="followUser(tweet.userId)">Follow</button>
              </div>
            </div>
            <hr>
            <tweet-comment />
          </div>
      </div>
    </div>
    <div id="login-error" v-else>
      <div id="login-error-msg">
        <h3>
          No user logged in, please
          <router-link to="/login" id="login-link">return to login</router-link>
        </h3>
      </div>
      <div id="no-user-error">
        <h1>UH OH...</h1>
        <img
          id="no-user"
          src="../assets/no-user-logged-in.png"
          alt="Uh Oh! No user logged in photo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import NavBarSection from "../components/NavBar.vue";
import TweetComment from "../components/Comment.vue";

  export default {
    name: "disover-page",
    components: {
      NavBarSection,
      TweetComment
    },
    data() {
      return {
        loginToken: cookies.get("loginToken"),
        tweets: [],
        userId: cookies.get("userId"),
        unfollow: true
      }
    },
    methods: {
      showUserTweets: function() {
        axios.request({
          method: "GET",
          url: "https://tweeterest.ml/api/tweets",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          }
        }).then((response) => {
          this.tweets = response.data;
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
      },
      checkFollowers: function() {
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
        });
      },
      followUser: function(userId) {
        axios.request({
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
        }).then((response) => {
            console.log(response.data);
            this.unfollow = true;
        }).catch((error) => {
            console.log(error);
        })
      },
      unfollowUser: function(userId) {
        axios.request({
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
        }).then((response) => {
            console.log(response);
            this.unfollow = true;
        }).catch((error) => {
            console.log(error);
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
a:visited {
  color: black;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #0d3955;
  font-family: "Arimo", sans-serif;
}
#login-error-msg {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin-top: 20vh;
  font-size: 24px;
  width: 40%;
  margin-left: 30%;
  line-height: 5vh;
}
#no-user-error {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin-top: 10vh;
  font-size: 18px;
  width: 40%;
  margin-left: 30%;
  line-height: 5vh;
}
#no-user {
  width: 75%;
  margin: 5vh;
}
hr {
  margin: 7vh;
  background-color: #0d3955;
  height: 1px;
}
#tweeter-discover {
  font-family: "Arimo", sans-serif;
  color: #0d3955;
}
#homepage-title {
  margin: 3vh;
  text-align: center;
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
  width: 35%;
  margin-left: 32.5%;
  text-align: center;
}
#show-tweets-btn:hover {
  transform: scale(0.9);
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
</style>