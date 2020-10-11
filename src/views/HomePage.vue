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
  background-color: #F0F0F0;
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
  font-family: "Arimo", sans-serif;
  color: #783030;
  margin-top: 5vh;
  font-size: 28px;
  align-items: center;
  justify-items: center;
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
  background-color: #F0F0F0;
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
  background-color: #F0F0F0;
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
  background-color: #F0F0F0;
}
#bottom-container {
  background-color: #F0F0F0;
  padding: 20px;
}
#homepage-btn {
  background-color: #F0F0F0;
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
  body {
    background-color: #F0F0F0;
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
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: #783030;
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
    background-color: #F0F0F0;
    align-items: center;
    justify-items: center;
  }
  #first-container {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    background-color: #F0F0F0;
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
    background-color: #F0F0F0;
  }
  #bottom-container {
    padding: 20px;
    background-color: #F0F0F0;
  }
  #homepage-btn {
    background-color: #F0F0F0;
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
  body {
    background-color: #F0F0F0;
  }
  #twt-photo-gif {
    width: 50%;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
  }
}
</style>
