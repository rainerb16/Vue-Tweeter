<template>
  <div>
    <div id="edit-container">
      <textarea
        type="text"
        class="tweet-post"
        v-model="updateTweetContent"
        placeholder="Update your NERDR. Max 200 characters"
      />
      <button @click="updateTweet">
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
          url: "https://nerdr.ml/api/tweets",
          headers: {
            "Content-Type": "application/json"
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
#edit-container {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
}
button {
  padding: 5px;
  margin-top: 10px;
  border-radius: 5%;
  box-shadow: 1px 0px 6px darkgray;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
button:hover {
  transform: scale(0.9);
}

// TABLET
@media only screen and (min-width: 670px) {
  button {
    padding: 5px;
    margin-top: 10px;
    border-radius: 5%;
    box-shadow: 1px 0px 6px darkgray;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
  }
  button:hover {
    transform: scale(0.9);
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
}
</style>
