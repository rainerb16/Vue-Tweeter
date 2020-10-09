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
  color: #4ecca3;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #4ecca3;
  font-family: "Arimo", sans-serif;
}
#login-error-msg {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #4ecca3;
  margin-top: 20vh;
  font-size: 24px;
  width: 40%;
  margin-left: 30%;
  line-height: 5vh;
}
#no-user-error {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #4ecca3;
  margin-top: 10vh;
  font-size: 18px;
  width: 40%;
  margin-left: 30%;
  line-height: 5vh;
}
#no-user {
  width: 75%;
  margin: 5vh;
}
hr {
  margin: 7vh;
  background-color: #4ecca3;
  height: 1px;
}
</style>