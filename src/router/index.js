import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Cart from '@/components/Cart'

import Admin from '@/components/admin/Admin'
import AdminCreate from '@/components/admin/AdminCreate'
import AdminEdit from '@/components/admin/AdminEdit'
import AdminProducts from '@/components/admin/AdminProducts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '',
          name: 'AdminProducts',
          component: AdminProducts
        },
        {
          path: 'new',
          name: 'AdminCreate',
          component: AdminCreate
        },
        {
          path: 'edit/:id',
          name: 'AdminEdit',
          component: AdminEdit
        }
      ]
    }
  ]
})
