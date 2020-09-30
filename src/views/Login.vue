<template>
  <div id="login-form">
    <h1 id="login-title" class="animate__animated animate__lightSpeedInRight">TWEETER LOGIN</h1>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <div></div>
    <button id="login-btn" @click="loginUser">Login</button>
    <h3 id="status"> {{ loginStatus }} </h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "login-page",
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading...";
      axios.request({
          method: "POST",
          url: "https://tweeterest.ml/api/login",
          headers: {
            "content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then((response) => {
          // CHECK IG LOGINTOKEN SENT
          console.log(response);
          this.loginStatus = "Success!";
          cookies.set("loginToken", response.data.loginToken);
          // SEND USER TO HOME PAGE
        })
        .catch((error) => {
          // SHOW USER LOGIN FAILURE
          console.log(error);
          this.loginStatus = "There was an error, please try again.";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#login-title {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: white;
}
#login-form {
  display: grid;
  align-items: center;
  justify-items: center;
}
p {
  font-family: "Arimo", sans-serif;
  letter-spacing: 2px;
  color: white;
}
input {
  border-radius: 10%;
}
#login-btn {
  margin: 2vh;
  padding: 5px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
}
#login-btn:hover {
  transform: scale(0.9);
}
#status {
  font-family: "Arimo", sans-serif;
  letter-spacing: 2px;
  color: white;
}
</style>
