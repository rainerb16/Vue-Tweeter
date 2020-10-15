<template>
  <div id="login-form">
    <h1 id="login-title" class="animate__animated animate__lightSpeedInRight">
      <span id="nerdr">NERDR</span><br />
      LOGIN
    </h1>
    <img id="logo" src="../assets/nerdface.png" alt="NERDR Logo" />
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <div></div>
    <button id="login-btn" @click="loginUser">Login</button>
    <h3 id="status">{{ loginStatus }}</h3>
    <router-link to="/signup" id="signup-link"
      >Not a user? Sign up here</router-link
    >
    <router-link to="/">Home</router-link>
    <footer-container />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import FooterContainer from "../components/Footer.vue";

export default {
  name: "login-page",
  components: {
    FooterContainer
  },
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
      axios
        .request({
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
        .then(response => {
          console.log(response);
          this.loginStatus = "Success!";
          cookies.set("loginToken", response.data.loginToken);
          cookies.set("userId", response.data.userId);
          this.$router.push("/userhome");
        })
        .catch(error => {
          // SHOW USER LOGIN FAILURE
          console.log(error);
          this.loginStatus = "There was an error, please try again.";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
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
#logo {
  width: 25%;
  margin-bottom: 5vh;
}
#login-title {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #783030;
  margin: 5vh;
}
#login-form {
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 10px;
}
p {
  font-family: "Arimo", sans-serif;
  letter-spacing: 2px;
  color: #783030;
}
input {
  border-radius: 10%;
  margin: 10px;
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
  color: #783030;
}
#signup-link {
  font-family: "Arimo", sans-serif;
  color: #783030;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 10px;
}
#nerdr {
  font-family: "Press Start 2P", cursive;
  color: black;
}
#status {
  text-align: center;
}

//TABLET
@media only screen and (min-width: 670px) {
  #logo {
    width: 15%;
    margin-bottom: 5vh;
  }
  #nerdr {
    font-size: 38px;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #logo {
    width: 10%;
    margin-bottom: 5vh;
  }
}
</style>
