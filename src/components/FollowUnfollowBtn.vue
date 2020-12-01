<template>
  <div id="follow-unfollow-btn">
    <img
      v-if="isFollowing == false"
      src="../assets/follow.png"
      alt="Follow Icon"
      id="tweet-btn-unfollow"
      @click="followUser"
    />
    <img
      v-else-if="isFollowing == true"
      src="../assets/unfollow.png"
      alt="Unfollow Icon"
      id="tweet-btn-follow"
      @click="unfollowUser"
    />
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
      isFollowing: false,
      usersFollowing: []
    };
  },
  props: {
    userId: Number
  },
  mounted: function() {
    this.checkFollowing();
  },
  methods: {
    followUser: function() {
      axios
        .request({
          method: "POST",
          url: "https://nerdr.ml/api/follows",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            followId: this.userId
          }
        })
        .then(response => {
          console.log(response.data);
          this.isFollowing = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    unfollowUser: function() {
      axios
        .request({
          method: "DELETE",
          url: "https://nerdr.ml/api/follows",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            followId: this.userId
          }
        })
        .then(response => {
          console.log(response);
          this.isFollowing = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkFollowing: function() {
      axios
        .request({
          method: "GET",
          url: "https://nerdr.ml/api/follows",
          headers: {
            "Content-Type": "application/json"
          },
          params: {
            userId: cookies.get("userId")
          }
        })
        .then(response => {
          console.log(response);
          this.usersFollowing = response.data;

          let currentUser = cookies.get("userId");
          for (let i = 0; i < this.usersFollowing.length; i++) {
            if (currentUser == this.usersFollowing[i].userId) {
              this.isFollowing = true;
            }
          }
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
#tweet-btn-unfollow,
#tweet-btn-follow {
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 50%;
  margin: 5vw;
  align-items: center;
  justify-items: center;
}
#follow-unfollow-btn {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}
#tweet-btn-unfollow:hover,
#tweet-btn-follow:hover {
  transform: scale(0.9);
}

// TABLET
@media only screen and (min-width: 670px) {
  #tweet-btn-follow,
  #tweet-btn-unfollow {
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 90%;
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
  }
}

//DESKTOP
@media only screen and (min-width: 1020px) {
  #tweet-btn-follow,
  #tweet-btn-unfollow {
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 90%;
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
  }
}
</style>
