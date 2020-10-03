<template>
  <div>
    <nav-bar-section />
    <profile-page />
  </div>
</template>

<script>
import NavBarSection from "../components/NavBar.vue";
import ProfilePage from "../components/EditProfile.vue";

  export default {
    name: "user-profile",
    components: {
      ProfilePage,
      NavBarSection
    }
  }
</script>

<style lang="scss" scoped>

</style>