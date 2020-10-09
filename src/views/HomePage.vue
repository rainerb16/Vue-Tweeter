<template>
  <div>
    <h1
      id="homepage-title"
      class="animate__animated animate__lightSpeedInRight"
    >
      <u><i>NERDR</i></u>
    </h1>
    <div
      id="homepage-container"
      class="animate__animated animate__lightSpeedInLeft"
    >
      <h4>
        what are other nerds talking about right now?<br /><br />
        that's what NERDR is for 🤓
      </h4>
      <br />
      <img
        id="twt-photo-gif"
        src="https://i.gifer.com/JFJN.gif"
        alt="NERDR Social Media Icon GIF"
      />
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
body {
  background-color: #373F51;
}
a:visited {
  color: black;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #4ecca3;
  font-family: "Arimo", sans-serif;
}
#homepage-title {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #f56476;
  margin-top: 5vh;
  font-size: 28px;
  align-items: center;
  justify-items: center;
}
#homepage-container {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #4ecca3;
  margin-top: 2vh;
  font-size: 20px;
  width: 40%;
  margin-left: 30%;
  margin-top: 5vh;
  background-color: #373F51;
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
  background-color: #373F51;
  color: #f56476;
}
#last-container {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #f56476;
  margin-top: 8vh;
  font-size: 25px;
  width: 40%;
  margin-left: 30%;
  background-color: #373F51;
}
#bottom-container {
  background-color: #373F51;
  padding: 20px;
}
#homepage-btn {
  background-color: #4ecca3;
  color: black;
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
  body {
    background-color: #373F51;
  }
}

// DESKTOP
@media only screen and (min-width: 1020px) {
  a:visited {
    color: #f56476;
  }
  a:link {
    color: #f56476;
  }
  #homepage-title {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #f56476;
    margin-top: 5vh;
    font-size: 40px;
    align-items: center;
    justify-items: center;
  }
  #homepage-container {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #f56476;
    margin-top: 2vh;
    font-size: 40px;
    width: 40%;
    margin-left: 30%;
    background-color: #373F51;
    align-items: center;
    justify-items: center;
  }
  #first-container {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    background-color: #373F51;
  }
  #last-container {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #f56476;
    margin-top: 5vh;
    margin-bottom: 3vh;
    font-size: 40px;
    width: 40%;
    margin-left: 30%;
    background-color: #373f51;
  }
  #bottom-container {
    padding: 20px;
    background-color: #373f51;
  }
  #homepage-btn {
    background-color: #f56476;
    color: black;
    width: 30%;
    margin-top: 7vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
    padding: 5px;
    border-radius: 10%;
    font-size: 16px;
  }
  body {
    background-color: #373f51;
  }
  #twt-photo-gif {
    width: 50%;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
  }
}
</style>
