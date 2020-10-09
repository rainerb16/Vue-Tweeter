<template>
  <div>
    <div v-if="loginToken != undefined">
      <nav-bar-section />
      <create-tweet />
      <following-tweets :tweetId="tweet.tweetId" />
    </div>
    <div id="login-error" v-else>
      <error-message />
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import NavBarSection from "../components/NavBar.vue";
import CreateTweet from "../components/CreateTweet.vue";
import ErrorMessage from "../components/404error.vue";
import FollowingTweets from "../components/FollowingTweets.vue";

export default {
  name: "user-tweets-page",
  components: {
    NavBarSection,
    CreateTweet,
    ErrorMessage,
    FollowingTweets
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      tweet: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
