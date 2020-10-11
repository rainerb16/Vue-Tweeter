<template>
  <div>
    <h1
      id="homepage-title"
      class="animate__animated animate__lightSpeedInRight"
    >
      <i>NERDR</i>
    </h1>
    <div
      id="homepage-container"
      class="animate__animated animate__lightSpeedInLeft"
    >
      <h4>
        what are other nerds talking about right now?<br /><br /><br />
        that's what<br /><br /><u id="nerdr">NERDR</u><br /><br />is for 🤓
      </h4>
      <br />
      <img
        id="twt-photo-gif"
        src="https://i.gifer.com/JFJN.gif"
        alt="NERDR Social Media Icon GIF"
      />
      <br />
      <br />
    </div>
    <div id="bottom-container">
      <div id="first-container">
        <button id="homepage-btn">
          <router-link to="/login">Have an account? Login Here</router-link>
        </button>
        <button id="homepage-btn">
          <router-link to="/signup">Explore NERDR</router-link>
        </button>
      </div>
      <div id="last-container">
        <h3>see what's happening...</h3>
      </div>
      <footer-container />
    </div>
  </div>
</template>

<script>
import FooterContainer from "../components/Footer.vue";
export default {
  name: "homepage-page",
  components: {
    FooterContainer
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
// MOBILE
body {
  background-color: #f0f0f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23606060' fill-opacity='0.2'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
a:visited {
  color: #783030;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #783030;
  font-family: "Arimo", sans-serif;
}
#homepage-title {
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  color: black;
  margin-top: 5vh;
  font-size: 28px;
  align-items: center;
  justify-items: center;
}
#nerdr {
  font-family: 'Press Start 2P', cursive;
  color: black;
  line-height: 1vh;
}
#homepage-container {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #783030;
  margin-top: 2vh;
  font-size: 20px;
  width: 40%;
  margin-left: 30%;
  margin-top: 5vh;
  background-color: #f0f0f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23606060' fill-opacity='0.2'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  align-items: center;
  justify-items: center;
}
#first-container {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
  background-color: #f0f0f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23606060' fill-opacity='0.2'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  color: #783030;
}
#last-container {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #783030;
  margin-top: 8vh;
  font-size: 25px;
  width: 40%;
  margin-left: 30%;
  background-color: #f0f0f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23606060' fill-opacity='0.2'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
#bottom-container {
  background-color: #f0f0f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23606060' fill-opacity='0.2'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  padding: 20px;
}
#homepage-btn {
  background-color: #f0f0f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23606060' fill-opacity='0.2'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  color: black;
  border: 1px solid black;
  width: 60%;
  text-align: center;
  font-family: "Arimo", sans-serif;
  padding: 5px;
  border-radius: 10%;
  font-size: 16px;
}
#twt-photo-gif {
  width: 120%;
  margin-left: -10%;
  border-radius: 50%;
}
#twt-photo {
  width: 75%;
  margin: 5vh;
  margin-left: 12.5%;
}

// TABLET
@media only screen and (min-width: 670px) {
  #twt-photo-gif {
    width: 75%;
    border-radius: 50%;
  }
  #nerdr {
    font-size: 28px;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  a:visited {
    color: #783030;
  }
  a:link {
    color: #783030;
  }
  #homepage-title {
    margin-top: 5vh;
    font-size: 40px;
    align-items: center;
    justify-items: center;
  }
  #homepage-container {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #783030;
    margin-top: 2vh;
    font-size: 40px;
    width: 40%;
    margin-left: 30%;
    align-items: center;
    justify-items: center;
  }
  #first-container {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-template-columns: 1fr 1fr;
  }
  #last-container {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #783030;
    margin-top: 5vh;
    margin-bottom: 3vh;
    font-size: 40px;
    width: 40%;
    margin-left: 30%;
  }
  #bottom-container {
    padding: 20px;
  }
  #homepage-btn {
    color: black;
    border: 1px solid black;
    width: 30%;
    margin-top: 7vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
    padding: 5px;
    border-radius: 10%;
    font-size: 16px;
  }
  #twt-photo-gif {
    width: 50%;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
  }
}
</style>
