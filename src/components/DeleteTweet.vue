<template>
  <div>
    <img src="../assets/delete-tweet.png" id="delete-tweet" @click="deleteTweet" />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "delete-tweet",
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteTweet: function() {
      axios
        .request({
          method: "DELETE",
          url: "https://nerdr.ml/api/tweets",
          headers: {
            "Content-Type": "application/json"
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
#delete-tweet {
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 70%;
  margin: 1vh;
}
#delete-tweet:hover {
  transform: scale(0.9);
}

// TABLET
@media only screen and (min-width: 670px) {
  #delete-tweet {
    width: 50%;
  }
}

//DESKTOP
@media only screen and (min-width: 1020px) {
  #delete-tweet {
    width: 50%;
  }
}
</style>
