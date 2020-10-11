<template>
  <div>
    <div v-if="loginToken != undefined">
      <nav-bar-section />
      <following-page />
    </div>
    <div id="login-error" v-else>
      <error-message />
    </div>
  </div>
</template>

<script>
import FollowingPage from "../components/Following.vue";
import NavBarSection from "../components/NavBar.vue";
import cookies from "vue-cookies";
import ErrorMessage from "../components/404error.vue";

export default {
  name: "user-homepage",
  components: {
    NavBarSection,
    FollowingPage,
    ErrorMessage
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      username: cookies.get("userId")
    };
  }
};
</script>

<style lang="scss" scoped>
//MOBILE
* {
  margin: 0;
  padding: 0;
}
a:visited {
  color: #783030;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #783030;
  font-family: "Arimo", sans-serif;
}

//TABLET
@media only screen and (min-width: 670px) {
}
</style>
