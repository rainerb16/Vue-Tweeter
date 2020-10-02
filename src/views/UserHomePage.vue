<template>
  <div>
    <div v-if="loginToken != undefined">
      <nav-bar-section />
      <tweeter-page />
    </div>
    <div id="login-error" v-else>
      <div id="login-error-msg">
        <h3>
          No user logged in, please
          <router-link to="/login" id="login-link">return to login</router-link>
        </h3>
      </div>
      <div id="no-user-error">
        <h1>UH OH...</h1>
        <img
          id="no-user"
          src="../assets/no-user-logged-in.png"
          alt="Uh Oh! No user logged in photo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TweeterPage from "../components/Tweeter";
import NavBarSection from "../components/NavBar.vue";
import cookies from "vue-cookies";

export default {
  name: "user-homepage",
  components: {
    TweeterPage,
    NavBarSection
  },
  data() {
    return {
      loginToken: cookies.get("loginToken")
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#login-error-msg {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin-top: 2vh;
  font-size: 18px;
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
  color: #0d3955;
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
</style>
