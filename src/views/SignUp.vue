<template>
  <div>
    <h1 id="title-text" class="animate__animated animate__lightSpeedInRight">TWEETER SIGN UP</h1>
    <sign-up-form id="signup-form" />
    <router-link to="/login" id="login-link">Login</router-link>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";

export default {
  name: "signup-page",
  components: {
    SignUpForm
  }
};
</script>

<style lang="scss" scoped>
#title-text {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: white;
}
#signup-form {
  display: grid;
  align-items: center;
  justify-items: center;
}
#login-link {
  font-family: "Arimo", sans-serif;
  color: white;
  text-align: center;
  align-items: center;
  justify-items: center;
}
</style>
