<template>
  <div id="tweeter-discover">
    <div v-if="loginToken != undefined">
      <nav-bar-section />
      <h2
        id="homepage-title"
        class="animate__animated animate__lightSpeedInRight"
      >
        DISCOVER ALL NERDS
      </h2>
      <create-tweet />
      <show-tweets id="show-tweets" :tweetId="tweet.tweetId" />
    </div>
    <div id="login-error" v-else>
      <error-message />
    </div>
  </div>
</template>

<script>
import ShowTweets from "../components/ShowTweets.vue";
import CreateTweet from "../components/CreateTweet.vue";
import NavBarSection from "../components/NavBar.vue";
import ErrorMessage from "../components/404error.vue";
import cookies from "vue-cookies";

export default {
  name: "disover-page",
  components: {
    NavBarSection,
    ErrorMessage,
    ShowTweets,
    CreateTweet
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      username: cookies.get("userId"),
      tweet: ""
    };
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 2vh;
  background-color: black;
}
#heart {
  width: 10%;
  margin-top: 1vh;
}
#tweet-user {
  color: #783030;
}
#homepage-title {
  margin: 3vh;
  text-align: center;
  align-items: center;
  justify-items: center;
  color: #783030;
  font-family: "Arimo", sans-serif;
}
#show-tweets {
  margin-bottom: 5vh;
  font-family: "Arimo", sans-serif;
  color: #783030;
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #homepage-title {
    margin: 3vh;
    text-align: center;
    align-items: center;
    justify-items: center;
    color: #783030;
    font-family: "Arimo", sans-serif;
  }
}
</style>
