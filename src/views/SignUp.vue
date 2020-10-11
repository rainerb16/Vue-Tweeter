<template>
  <div>
    <h1 id="title-text" class="animate__animated animate__lightSpeedInRight">
      <span id="nerdr">NERDR</span><br />
      SIGN UP
    </h1>
    <sign-up-form id="signup-form" />
    <router-link to="/login" id="login-link"
      >Have an account? Login Here</router-link
    >
    <footer-container />
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";
import FooterContainer from "../components/Footer.vue";

export default {
  name: "signup-page",
  components: {
    SignUpForm,
    FooterContainer
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#title-text {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #783030;
  margin: 5vh;
}
#signup-form {
  display: grid;
  align-items: center;
  justify-items: center;
  color: #783030;
  margin: 10px;
}
#login-link {
  font-family: "Arimo", sans-serif;
  color: #783030;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 5vh;
}
#nerdr {
  font-family: "Press Start 2P", cursive;
  color: black;
}
</style>
