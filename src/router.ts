import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./components/Home.vue";

const routes: RouteRecordRaw[] = [{
	path: "/", component: Home
}];

export default createRouter({
  history: createWebHistory(),
  routes
});
