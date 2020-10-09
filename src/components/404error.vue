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
        src="../assets/404.gif"
        alt="Uh Oh! No user logged in photo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "404-error"
};
</script>

<style scoped>
/* MOBILE */
a:visited {
  color: #f56476;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: #f56476;
  font-family: "Arimo", sans-serif;
}
#login-error-msg {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: #4ecca3;
  margin-top: 20vh;
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
  color: #4ecca3;
  margin-top: 10vh;
  font-size: 18px;
  width: 40%;
  margin-left: 30%;
  line-height: 5vh;
}
#no-user {
  width: 75%;
  margin: 5vh;
}
</style>
