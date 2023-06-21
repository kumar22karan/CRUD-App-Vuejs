import { createRouter, createWebHistory } from 'vue-router'
import CreateUser from '../components/CreateUser';
import AddUser from '../components/AddUser'
import ReadUser from '../components/ReadUser'
import EditUser from '../components/EditUser'
const routes = [
  {
    path: '/read/new',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/edit/:id',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/read',
    name: 'ReadUser',
    component: ReadUser
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
