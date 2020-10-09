<template>
  <div>
    <div id="show-tweets">
      <h3 id="show-tweets-btn" @click="getFollowers">Show Who You Follow</h3>
      <br />
      <div v-if="users.length > 0">
        <div id="tweet-container" v-for="user in users" :key="user.userId">
          <h3 id="user-username">{{ user.username }}</h3>
          <h4><u>Bio:</u> {{ user.bio }}</h4>
          <h4><u>Birthdate:</u> {{ user.birthdate }}</h4>
          <h4><u>Email:</u> {{ user.email }}</h4>
          <br />
        </div>
      </div>
      <h2 id="no-followers-msg" v-else>
        This looks empty :( <br /><br /><br />
        Click "<u>Show Who You Follow</u>"<br /><br />
        OR <br /><br />
        Check out <u>Discover to find nerdy NERDRS to follow</u>!
      </h2>
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
      users: [],
      isHidden: true,
      userId: cookies.get("userId"),
      followingStatus: null
    };
  },
  methods: {
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
    isLiked: function(tweetId) {
      axios
        .request({
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
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    unLiked: function(tweetId) {
      axios
        .request({
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
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getFollowers: function() {
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
    }
  }
};
</script>

<style lang="scss" scoped>
#show-tweets {
  margin-bottom: 5vh;
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
  margin-top: 7vh;
  text-align: center;
  font-family: "Arimo", sans-serif;
}
#show-tweets-btn:hover {
  transform: scale(0.9);
}
.tweet-btn {
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
.tweet-btn:hover {
  transform: scale(0.9);
}
#delete-edit-post {
  align-items: center;
  justify-items: center;
  display: grid;
}
#tweet-container {
  border: 1px solid #f56476;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
  color: #f56476;
  line-height: 4vh;
}
hr {
  margin: 2vh;
  background-color: #f56476;
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
#no-followers-msg {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #f56476;
  margin: 5vh;
}
#user-username {
  color: #4ecca3;
}

//TABLET
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
    width: 15%;
    margin-left: 42.5%;
    margin-top: 7vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
  }
  #show-tweets-btn:hover {
    transform: scale(0.9);
  }
  #tweet-container {
    border: 1px solid #f56476;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    width: 75%;
    margin-left: 12.5%;
  }
}

//DESKTOP
@media only screen and (min-width: 1020px) {
  #tweet-container {
    border: 1px solid #f56476;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    width: 60%;
    margin-left: 20%;
  }
}
</style>
