<template>
  <div>
    <div id="navbar">
      <img
        id="tweeter-logo"
        src="../assets/tweeter-logo.png"
        alt="A Tweeter Logo"
      />
      <h3 id="logout-btn" @click="userLogout"><u>Logout</u></h3>
      <span></span>
      <span></span>
      <h3><router-link to="/userhome">Home</router-link></h3>
      <span></span>
      <h3>Discover</h3>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  name: "navbar-section",
  // data() {
  //   return {
  //     userLoggedIn: ""
  //   };
  // },
  methods: {
    // userLogin() {
    //   let userLoggedIn = cookies.get("loginToken");
    //   console.log(userLoggedIn);
    // },
    userLogout() {
      cookies.remove("loginToken");
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
// MOBILE
#logout-btn {
  background-color: #1da1f2;
  color: white;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
#logout-btn:hover {
  transform: scale(0.9);
}
a:visited {
  color: black;
}
a:link {
  color: black;
}
#tweeter-logo {
  width: 100%;
}
#homepage-title {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin-top: 5vh;
  font-size: 40px;
  font-family: "Arimo", sans-serif;
}
#navbar {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-template-columns: 3fr 1fr 3fr 3fr 1fr 1fr 1fr;
  background-color: white;
  padding: 10px;
  font-family: "Arimo", sans-serif;
}

// TABLET
@media only screen and (min-width: 670px) {
  #tweeter-logo {
    width: 50%;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #tweeter-logo {
    width: 30%;
  }
}
</style>
