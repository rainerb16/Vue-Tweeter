<template>
  <div>
    <div v-if="loginToken != undefined">
      <h4>{{ deleteStatus }}</h4>
      <br />
      <div id="delete-container">
        <h3 id="delete-title">Delete Profile</h3>
        <h3>Enter your password to delete your profile</h3>
        <input type="password" v-model="password" />
        <button id="delete-btn" @click="deleteProfile">Delete Profile</button>
      </div>
    </div>
    <div v-else>
      <error-page />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import ErrorPage from "../components/404error.vue";

export default {
  name: "delete-profile",
  components: {
    ErrorPage
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      username: "",
      password: "",
      deleteStatus: ""
    };
  },
  methods: {
    deleteProfile: function() {
      this.deleteStatus = "There's no turning back!";
      axios
        .request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          this.deleteStatus = "You're no longer a NERDR :(";
          this.$router.push("/");
          cookies.delete("loginToken");
          cookies.delete("userId");
        })
        .catch(error => {
          console.log(error);
          this.deleteStatus =
            "There was an error. The NERDR Gods must want you to stay!";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#delete-title,
h4 {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #783030;
  margin-bottom: 3vh;
  font-size: 24px;
  margin-top: 5vh;
}
#delete-container {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #783030;
  border: 1px solid black;
  width: 75%;
  margin-left: 12.5%;
}
input {
  margin: 10px;
}
#delete-btn {
  background-color: #f0f0f0;
  color: black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  margin: 10px;
}
#delete-btn:hover {
  transform: scale(0.9);
}
</style>
