<template>
  <div>
    <h5 id="nerdr">NERDR by Rainer Brieger</h5>
  </div>
</template>

<script>
export default {
  name: "footer-container"
};
</script>

<style lang="scss" scoped>
#nerdr {
  font-family: "Press Start 2P", cursive;
  color: black;
  font-size: 10px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 10vh;
}

// TABLET
@media only screen and (min-width: 670px) {
  #nerdr {
    font-size: 12px;
  }
}
</style>
