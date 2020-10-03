<template>
  <div id="signup-form">
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Username</p>
    <input type="text" id="username-input" v-model="username" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <p>Bio</p>
    <textarea id="bio-input" v-model="bio"></textarea>
    <p>Birthday</p>
    <input
      type="text"
      id="birthday-input"
      placeholder="yyyy-mm-dd"
      v-model="birthdate"
    />
    <button id="signup-btn" @click="signupUser">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "signup-form",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: ""
    };
  },
  methods: {
    signupUser: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        // eslint-disable-next-line prettier/prettier
        .then((response) => {
          //WRITE LOGIN TO ENSURE TOKEN WAS SENT (IF STATEMENT)
          cookies.set("loginToken", response.data.loginToken);
          this.$router.push("/userhome");
        })
        // eslint-disable-next-line prettier/prettier
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-family: "Arimo", sans-serif;
  letter-spacing: 2px;
  color: #0d3955;
  padding: 5px;
}
input {
  border-radius: 10%;
  padding: 5px;
  margin: 5px;
}
#birthday-input {
  text-align: center;
}
#signup-btn {
  margin: 2vh;
  padding: 5px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
}
#signup-btn:hover {
  transform: scale(0.9);
}
</style>
