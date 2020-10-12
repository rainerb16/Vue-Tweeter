<template>
  <div>
    <button id="delete-tweet" @click="deleteTweet">
      Delete
    </button>
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
          url: "https://tweeterest.ml/api/tweets",
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
#delete-tweet {
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
#delete-tweet:hover {
  transform: scale(0.9);
}

// TABLET
@media only screen and (min-width: 670px) {
  #delete-tweet {
    width: 100%;
  }
}

//DESKTOP
@media only screen and (min-width: 1020px) {
  #delete-tweet {
    width: 100%;
  }
}
</style>
