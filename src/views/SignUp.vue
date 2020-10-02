<template>
  <div>
    <h1 id="title-text" class="animate__animated animate__lightSpeedInRight">
      TWEETER SIGN UP
    </h1>
    <sign-up-form id="signup-form" />
    <router-link to="/login" id="login-link"
      >Have an account? Login Here</router-link
    >
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
  color: #1da1f2;
  margin: 5vh;
}
#signup-form {
  display: grid;
  align-items: center;
  justify-items: center;
  color: #0d3955;
  margin: 10px;
}
#login-link {
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 5vh;
}
</style>
