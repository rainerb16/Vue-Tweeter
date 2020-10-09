<template>
  <div>
    <h1 id="title-text" class="animate__animated animate__lightSpeedInRight">
      NERDR SIGN UP
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
* {
  margin: 0;
  padding: 0;
}
#title-text {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #F56476;
  margin: 5vh;
}
#signup-form {
  display: grid;
  align-items: center;
  justify-items: center;
  color: #F56476;
  margin: 10px;
}
#login-link {
  font-family: "Arimo", sans-serif;
  color: #F56476;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 5vh;
}
</style>
