import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue"
import EventList from "../views/EventList.vue"
import EventShow from "../views/EventShow.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/:id", //dynamic segment - url with dynamic properties
    name: "event-show",
    component: EventShow,
    // component: () => // imports component when gets to its url
    //   import(/* webpackChunkName: "about" */ "../views/EventShow.vue"),
      props: true // route can accept props - which will be in the components props
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  }
];
//https://router.vuejs.org/installation.html
const router = new VueRouter({
  mode:'history', // mode history removes the # from the url, # simulates a full url, so when page changes it doesnt refres hthe URL , for real apps the configuration is abit different
  routes,
}); // history uses the browers history.pushstate API to change the URL without reloading the page, then it returns index.html which loads the wanted page
export default router;
