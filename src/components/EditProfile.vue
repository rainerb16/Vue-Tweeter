<template>
  <div>
    <div id="edit-profile">
      <h3 id="edit-title">Edit Profile</h3>
      <p>Email</p>
      <input type="email" id="email-input" v-model="email">
      <p>Username</p>
      <input type="text" id="username-input" v-model="username">
      <p>Password</p>
      <input type="text" id="password-input" v-model="password">
      <p>Bio</p>
      <textarea type="text" id="bio-input" v-model="bio" />
      <p>Birthdate</p>
      <input type="text" id="birthdate-input" placeholder="yyyy-mm-dd" v-model="birthdate">
      <br><br>
      <button id="update-btn" @click="updateProfile">Update</button>
      <!-- <div id="status">
        <h3 v-if="updateProfile">Profile Updated!</h3>
        <h3 v-else>There was error, please try again.</h3>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

  export default {
    name: "edit-profile",
    data() {
      return {
        email: "",
        username: "",
        password: "",
        bio: "",
        birthdate: ""
      }
    },
    methods: {
      updateProfile: function() {
        axios.request({
          method: "PATCH",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "Hd4E3CxvXOCyZUkTL9PE6sVJ3V5DS6PzgSUA2P0hJ5IUa"
          },
          data: {
            loginToken: cookies.get("loginToken"),
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate
          }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
#edit-title {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin: 5vh;
  font-size: 24px;
}
#edit-profile {
  display: grid;
  align-items: center;
  justify-items: center;
}
p {
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin: 1vh;
}
#birthdate-input {
  text-align: center;
}
input {
  margin: 1vh;
}
#update-btn {
  background-color: #1da1f2;
  color: white;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
#update-btn:hover {
  transform: scale(0.9);
}
#status {
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin: 4vh;
}
</style>