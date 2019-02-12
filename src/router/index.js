import Vue from 'vue'
import Router from 'vue-router'

import Cart from '@/components/Cart'
import Products from '@/components/Products'

import Admin from '@/components/admin/Admin'
import Orders from '@/components/admin/Orders'
import ProductCreate from '@/components/admin/ProductCreate'
import ProductEdit from '@/components/admin/ProductEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
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
