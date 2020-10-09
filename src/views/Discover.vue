<template>
  <div id="tweeter-discover">
    <div v-if="loginToken != undefined">
      <nav-bar-section />
      <h2
        id="homepage-title"
        class="animate__animated animate__lightSpeedInRight"
      >
        NERDR DISCOVER
      </h2>
      <following-tweets :tweetId="tweet.tweetId" />
    </div>
    <div id="login-error" v-else>
      <error-message />
    </div>
  </div>
</template>

<script>
import FollowingTweets from "../components/FollowingTweets.vue";
import NavBarSection from "../components/NavBar.vue";
import ErrorMessage from "../components/404error.vue";
import cookies from "vue-cookies";

export default {
  name: "disover-page",
  components: {
    NavBarSection,
    ErrorMessage,
    FollowingTweets
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
#homepage-title {
  margin: 3vh;
  text-align: center;
  align-items: center;
  justify-items: center;
  color: #4ecca3;
  font-family: "Arimo", sans-serif;
}
</style>
