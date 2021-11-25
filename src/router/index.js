import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import ContactApp from '../views/ContactApp'
import ContactDetails from '../views/ContactDetails'
import StatisticPage from '../views/StatisticPage'
import ContactEdit from '../views/ContactEdit'
import NotFound from '../views/NotFound'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/StatisticPage',
    name: 'StatisticPage',
    component: StatisticPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactApp,
  },
  {
    path: '/contact/edit/:contactId?',
    name: 'ContactEdit',
    component: ContactEdit
  },
  {
    path: '/contact/:contactId',
    name: 'ContactDetails',
    component: ContactDetails
  },
  {
    path: '*',
    component: NotFound
  },

]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
