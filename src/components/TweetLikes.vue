<template>
  <div>
    <div id="likes-container">
      <img
        id="like"
        @click="likeTweet(tweetId)"
        v-if="isLiked == false"
        src="../assets/like.png"
        alt="Heart Icon"
      />
      <img
        id="unlike"
        @click="unlikeTweet"
        v-else-if="isLiked == true"
        src="../assets/unlike.png"
        alt="Broken Heart Icon"
      />
      <span></span>
      <div>Likes: {{ likesNum.length }}</div>
      <span></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "tweet-likes",
  data() {
    return {
      likesNum: [],
      isLiked: false
    };
  },
  props: {
    tweetId: Number
  },
  mounted: function() {
    this.getLikes();
  },
  methods: {
    likeTweet: function(tweetId) {
      (this.isLiked = true),
        axios
          .request({
            url: "https://tweeterest.ml/api/tweet-likes",
            method: "POST",
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
    getLikes: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.likesNum = response.data;

          let currentUser = cookies.get("userId");
          for (let i = 0; i < this.likesNum.length; i++) {
            if (currentUser == this.likesNum[i].userId) {
              this.isLiked = true;
              return;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    unlikeTweet: function() {
      (this.isLiked = false),
        axios
          .request({
            url: "https://tweeterest.ml/api/tweet-likes",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
            },
            data: {
              loginToken: cookies.get("loginToken"),
              tweetId: this.tweetId
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
//MOBILE
#likes-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 4fr;
}
#like,
#unlike {
  width: 40%;
  margin: 4vw;
}

// TABLET
@media only screen and (min-width: 670px) {
  #like,
  #unlike {
    width: 30%;
    margin: 4vw;
  }
}

//DESKTOP
@media only screen and (min-width: 1020px) {
  #like,
  #unlike {
    width: 15%;
    margin: 4vw;
  }
}
</style>
