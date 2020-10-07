<template>
  <div>
    <div id="navbar">
      <router-link to="/userhome"
        ><img
          id="tweeter-logo"
          src="../assets/tweeter-logo.png"
          alt="A Tweeter Logo"
      /></router-link>
      <h3 id="logout-btn" @click="userLogout"><u>Logout</u></h3>
      <span></span>
      <router-link to="/profile"><h3>Profile</h3></router-link> |

      <router-link to="/userfeed"><h3>Your Tweets</h3></router-link> |

      <router-link to="/discover"><h3>Discover</h3></router-link>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  name: "navbar-section",
  methods: {
    userLogout() {
      cookies.remove("loginToken");
      cookies.remove("userId");
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
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #0d3955;
  font-family: "Arimo", sans-serif;
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
}
#navbar {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
