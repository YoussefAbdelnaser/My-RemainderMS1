import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage, // Use LandingPage component here
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue') // Adjust the path as necessary
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp') // Adjust the path as necessary
  },
  {
    path: '/add-remainder',
    name: 'AddRemainder',
    component: () => import('../views/AddRemainder') // Adjust the path as necessary
  },{
    path: '/normal-remainders',
    name: 'NormalRemainder',
    component: () => import('../views/NormalRemainders') // Adjust the path as necessary
  },
  {
    path: '/sensetive-remainders',
    name: 'SenseRemainder',
    component: () => import('../views/SensetiveRemainders') // Adjust the path as necessary
  },
  {
    path: '/frequent-remainders',
    name: 'FrequentRemainders',
    component: () => import('../views/FrequentRemainders') // Adjust the path as necessary
  },
  
  // ... any other routes
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
