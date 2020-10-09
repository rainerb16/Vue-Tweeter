<template>
  <div>
    <nav-bar-section />
    <div v-if="loginToken != undefined">
      <create-tweet />
      <following-tweets />
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
import FollowingTweets from "../components/AllUserTweets.vue";

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
      tweets: [],
      loginToken: cookies.get("loginToken")
    };
  }
};
</script>

<style lang="scss" scoped></style>
