<template>
  <div>
    <div id="login-error-msg">
      <h3>
        No NERDR logged in, please<br /><br />
        <router-link to="/login" id="login-link">return to login</router-link>
      </h3>
    </div>
    <div id="no-user-error">
      <h1>UH OH...</h1>
      <img
        id="no-user"
        src="https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif"
        alt="The Force Leading User Back Home"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "error-page"
};
</script>

<style scoped>
/* MOBILE */
a:visited {
  color: black;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: black;
  font-family: "Arimo", sans-serif;
}
#login-error-msg {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: black;
  margin-top: 10vh;
  font-size: 24px;
  width: 40%;
  margin-left: 30%;
  line-height: 5vh;
}
#no-user-error {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #783030;
  margin-top: 10vh;
  font-size: 18px;
  width: 40%;
  margin-left: 30%;
  line-height: 5vh;
}
#no-user {
  width: 175%;
  margin: 5vh;
}

/* TABLET */
@media only screen and (min-width: 670px) {
  #no-user {
    width: 125%;
    margin: 5vh;
  }
}

/* DESKTOP */
@media only screen and (min-width: 1020px) {
  #no-user {
    width: 75%;
    margin: 5vh;
  }
}
</style>
