<template>
  <div id="follow-unfollow-btn">
    <button
      id="tweet-btn-unfollow"
      @click="followUser"
      v-if="isFollowing == false"
    >
      Follow
    </button>
    <button
      id="tweet-btn-follow"
      @click="unfollowUser"
      v-else-if="isFollowing == true"
    >
      Unfollow
    </button>
    <span></span>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "follow-unfollow-btn",
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      userId: cookies.get("userId"),
      isFollowing: false,
      usersFollowing: []
    };
  },
  methods: {
    followUser: function() {
      this.isFollowing = true;
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
            followId: this.userId
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    unfollowUser: function() {
      this.isFollowing = false;
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
            followId: this.userId
          }
        })
        .then(response => {
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
          url: "https://tweeterest.ml/api/followers",
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
          this.usersFollowing = response.data;
          this.isFollowing = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.checkFollowers();
  }
};
</script>

<style lang="scss" scoped>
// MOBILE
#tweet-btn-unfollow,
#tweet-btn-follow {
  background-color: #f0f0f0;
  color: black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 100%;
  text-align: center;
  margin: 1vh;
}
#follow-unfollow-btn {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  text-align: center;
  margin-left: 2%;
}
#tweet-btn-unfollow:hover,
#tweet-btn-follow:hover {
  transform: scale(0.9);
}

// TABLET
@media only screen and (min-width: 670px) {
  #tweet-btn-follow,
  #tweet-btn-unfollow {
    background-color: #f0f0f0;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 100%;
    text-align: center;
    margin: 1vh;
  }
  #tweet-btn-follow:hover,
  #tweet-btn-unfollow:hover {
    transform: scale(0.9);
  }
  #follow-unfollow-btn {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    text-align: center;
  }
}

//DESKTOP
@media only screen and (min-width: 1020px) {
  #tweet-btn-follow,
  #tweet-btn-unfollow {
    background-color: #f0f0f0;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 100%;
    text-align: center;
    margin: 1vh;
  }
  #tweet-btn-follow:hover,
  #tweet-btn-unfollow:hover {
    transform: scale(0.9);
  }
  #follow-unfollow-btn {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    text-align: center;
    margin-left: 2%;
  }
}
</style>
