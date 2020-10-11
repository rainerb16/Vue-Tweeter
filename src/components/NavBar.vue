<template>
  <div>
    <div id="navbar">
      <router-link to="/userhome"
        ><img id="nerdr-logo" src="../assets/nerdface.png" alt="A NERDR Logo"
      /></router-link>
      <h4 id="logout-btn" @click="userLogout"><u>Logout</u></h4>
      <span></span>
      <router-link to="/profile"><h4 id="nav-link">Profile</h4></router-link> |

      <router-link to="/userfeed"
        ><h4 id="nav-link">NERDR Feed</h4></router-link
      >
      |

      <router-link to="/discover"><h4 id="nav-link">Discover</h4></router-link>
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
* {
  margin: 0;
  padding: 0;
}
// MOBILE
#logout-btn {
  background-color: #783030;
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
  color: #783030;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #783030;
  font-family: "Arimo", sans-serif;
  text-decoration: none;
}
#nerdr-logo {
  width: 80%;
  margin-right: 5vw;
}
#homepage-title {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #783030;
  margin-top: 5vh;
  font-size: 40px;
}
#navbar {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: #A8A8A8;
  padding: 10px;
  font-family: "Arimo", sans-serif;
  color: #783030;
  column-gap: 5px;
}

// TABLET
@media only screen and (min-width: 670px) {
  #nerdr-logo {
    width: 30%;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  #nerdr-logo {
    width: 15%;
  }
  #navbar {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-template-columns: 2fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
    background-color: #A8A8A8;
    padding: 10px;
    font-family: "Arimo", sans-serif;
    color: #783030;
  }
  #nav-link {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    font-size: 18px;
    color: #783030;
    padding: 7px;
  }

  #nav-link:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: black;
    height: 3px;
    transition-property: left, right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  #nav-link:hover:before,
  #nav-link:focus:before,
  #nav-link:active:before {
    left: 0;
    right: 0;
  }
}
</style>
