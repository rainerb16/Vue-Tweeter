<template>
  <div>
    <h1
      id="homepage-title"
      class="animate__animated animate__lightSpeedInRight"
    >
      TWEETER
    </h1>
    <div
      id="homepage-container"
      class="animate__animated animate__lightSpeedInLeft"
    >
      <h4>
        what are folks talking about right now?<br><br>
        that's what tweeter is for
      </h4>
      <br />
      <img id="twt-photo-gif" src="https://www.socialchamp.io/blog/wp-content/uploads/2019/06/twittercelebration.gif" alt="A Social Media Icon GIF" />
      <br />
    </div>
    <div id="bottom-container">
      <div id="first-container">
        <button id="homepage-btn">
          <router-link to="/login">Have an account? Login Here</router-link>
        </button>
        <button id="homepage-btn">
          <router-link to="/signup">Explore Tweeter</router-link>
        </button>
      </div>
      <div id="last-container">
        <img id="twt-photo" src="../assets/twt.png" alt="A Social Media Icon" />
        <h3>see what's happening...</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage-page"
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
// MOBILE
a:visited {
  color: black;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #0d3955;
  font-family: "Arimo", sans-serif;
}
#homepage-title {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #1da1f2;
  margin-top: 5vh;
  font-size: 28px;
}
#homepage-container {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin-top: 2vh;
  font-size: 25px;
  width: 40%;
  margin-left: 30%;
}
#first-container {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
}
#last-container {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #0d3955;
  margin-top: 3vh;
  font-size: 25px;
  width: 40%;
  margin-left: 30%;
}
#bottom-container {
  background-color: white;
  padding: 20px;
}
#homepage-btn {
  background-color: white;
  color: #1da1f2;
  width: 60%;
  text-align: center;
  font-family: "Arimo", sans-serif;
  padding: 5px;
  border-radius: 10%;
  font-size: 16px;
}
#twt-photo-gif {
  width: 100%;
  border-radius: 50%;
}
#twt-photo {
  width: 50%;
}

// TABLET
@media only screen and (min-width: 670px) {
  #twt-photo-gif {
    width: 75%;
    border-radius: 50%;
}
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  a:visited {
    color: black;
  }
  a:link {
    color: black;
  }
  #homepage-title {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #1da1f2;
    margin-top: 5vh;
    font-size: 40px;
  }
  #homepage-container {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #0d3955;
    margin-top: 2vh;
    font-size: 40px;
    width: 40%;
    margin-left: 30%;
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
    color: #0d3955;
    margin-top: 5vh;
    margin-bottom: 3vh;
    font-size: 40px;
    width: 40%;
    margin-left: 30%;
  }
  #bottom-container {
    background-color: white;
    padding: 20px;
  }
  #homepage-btn {
    background-color: white;
    color: #1da1f2;
    width: 30%;
    margin-top: 7vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
    padding: 5px;
    border-radius: 10%;
    font-size: 16px;
  }
  #twt-photo {
    width: 40%;
  }
}
</style>
