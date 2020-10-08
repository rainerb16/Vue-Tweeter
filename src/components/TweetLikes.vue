<template>
  <div>
    <img id="heart" @click="likeTweet" src="../assets/heart.png" alt="Heart Icon">
    <p>Likes: {{ likesNum.length }}</p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

  export default {
    name: "tweet-likes",
    data() {
      return {
        likesNum: []
      }
    },
    props: {
      tweetId: Number
    },
    methods: {
      likeTweet: function() {
        axios.request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            tweetId: this.tweetId
          }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
      },
      getLikes: function() {
        axios.request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "GET",
          header: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          params: {
            tweetId: this.tweetId
          }
        }).then((response) => {
            console.log(response.data);
            this.likesNum = response.data;
        }).catch((error) => {
            console.log(error);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
//MOBILE
#heart {
  width: 7%;
  margin: 1vw;
}

//DESKTOP
@media only screen and (min-width: 1020px){
  #heart {
    width: 5%;
  }
}
</style>