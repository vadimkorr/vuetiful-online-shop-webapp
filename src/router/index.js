import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Products from '@/components/Products'

import Admin from '@/components/admin/Admin'
import ProductCreate from '@/components/admin/ProductCreate'
import ProductEdit from '@/components/admin/ProductEdit'

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
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/create-product',
      name: 'ProductCreate',
      component: ProductCreate
    },
    {
      path: '/edit-product/:id',
      name: 'ProductEdit',
      component: ProductEdit
    }
  ]
})
