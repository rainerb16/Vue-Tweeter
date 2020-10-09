<template>
  <div>
    <div v-if="loginToken != undefined">
      <nav-bar-section />
      <profile-page />
      <hr>
      <delete-profile />
    </div>
    <div id="login-error" v-else>
      <error-message />
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import NavBarSection from "../components/NavBar.vue";
import ProfilePage from "../components/EditProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";
import ErrorMessage from "../components/404error.vue";

  export default {
    name: "user-profile",
    components: {
      ProfilePage,
      NavBarSection,
      DeleteProfile,
      ErrorMessage
    },
    data() {
      return {
        loginToken: cookies.get("loginToken")
      }
    },
  }
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
a:visited {
  color: #F56476;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #F56476;
  font-family: "Arimo", sans-serif;
}
hr {
  margin: 7vh;
  background-color: #F56476;
  height: 1px;
}
</style>