import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import HomePage from "../views/HomePage.vue";
import UserHomePage from "../views/UserHomePage.vue";
import ProfilePage from "../views/Profile.vue";
import DiscoverPage from "../views/Discover.vue";
import UserTweetsPage from "../views/UserTweets.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "homepage-page",
    component: HomePage
  },
  {
    path: "/signup",
    name: "signup-page",
    component: SignUpPage
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/userhome",
    name: "user-homepage",
    component: UserHomePage
  },
  {
    path: "/profile",
    name: "user-profile",
    component: ProfilePage
  },
  {
    path: "/discover",
    name: "discover-page",
    component: DiscoverPage
  },
  {
    path: "/userfeed",
    name: "user-tweets-page",
    component: UserTweetsPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
