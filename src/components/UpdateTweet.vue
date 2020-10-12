<template>
  <div>
    <div id="edit-container">
      <textarea
        type="text"
        id="tweet-post"
        v-model="updateTweetContent"
        placeholder="Update your NERDR. Max 200 characters"
      />
      <div></div>
      <button id="edit-tweet" @click="updateTweet">
        Update Post
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "update-tweet",
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      userId: cookies.get("userId"),
      updateTweetContent: ""
    };
  },
  props: {
    tweetId: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateTweet: function() {
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
            tweetId: this.tweetId,
            content: this.updateTweetContent
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
#edit-tweet {
  background-color: #f0f0f0;
  color: black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 40%;
  text-align: center;
  margin: 1vh;
}
#edit-tweet:hover {
  transform: scale(0.9);
}
#edit-container {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
}

// TABLET
@media only screen and (min-width: 670px) {
  #edit-tweet {
    background-color: #f0f0f0;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 20%;
    text-align: center;
    margin: 1vh;
  }
  #edit-tweet:hover {
    transform: scale(0.9);
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #edit-tweet {
    background-color: #f0f0f0;
    color: black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 13%;
    text-align: center;
    margin: 1vh;
  }
  #edit-tweet:hover {
    transform: scale(0.9);
  }
}
</style>
