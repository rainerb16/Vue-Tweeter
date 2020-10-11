<template>
  <div>
    <div id="delete-container">
      <h3 id="delete-title">Delete Profile</h3>
      <h3>Enter your password to delete your profile</h3>
      <input type="text" v-model="password" />
      <button id="delete-btn" @click="deleteProfile">Delete Profile</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "delete-profile",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    deleteProfile: function() {
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
          cookies.delete("loginToken");
          cookies.delete("userId");
          this.$router.push("/home");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#delete-title {
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
  padding: 10px;
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
