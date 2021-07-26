import { createRouter, createWebHashHistory } from 'vue-router';
import Post from "../components/Post";
import Hello from "../components/Hello";

const routes = [
  {
    path: '/',
    name:'home',
    component: Hello,
  },
  {
    path: '/post/:id',
    name:'post',
    component: Post,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
