import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue';
import EditPost from '../views/EditPost.vue'
import AboutView from '../views/AboutView.vue'

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
    props:true
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
