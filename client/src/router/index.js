import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue';
import EditPost from '../views/EditPost.vue'
import AboutView from '../views/AboutView.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },

  {
    path: '/editPost/:id',
    name: 'editPost',
    component: EditPost
  },

  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    props: true
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   const localID = localStorage.getItem('id');
//   if (!localID && to.name !== "login" && to.name !== "register") {
//     next({ name: 'login' });
//   } else if (localID && to.name == 'login') {
//     next({ name: 'home' })
//   }
//   else next();

// });

export default router;
