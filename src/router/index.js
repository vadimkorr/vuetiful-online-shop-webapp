import Vue from 'vue'
import Router from 'vue-router'

import {
  OrdersScreen,
  ProductCreateScreen,
  ProductEditScreen,
  Wrapper as AdminWrapper,
  ProductsScreen as AdminProductsScreen
} from '@/screens/Admin'
import {
  CartScreen,
  ProductsScreen,
  Wrapper as CustomerWrapper,
  OrdersScreen as CustomerOrdersScreen
} from '@/screens/Customer'
import {
  SignUpScreen,
  SignInScreen,
  Wrapper as UnauthWrapper
} from '@/screens/Unauth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: UnauthWrapper,
      children: [
        {
          path: '',
          component: SignUpScreen
        },
        {
          path: 'signin',
          component: SignInScreen
        }
      ]
    },
    {
      path: '/customer',
      component: CustomerWrapper,
      children: [
        {
          path: '',
          component: ProductsScreen
        },
        {
          path: 'cart',
          component: CartScreen
        },
        {
          path: 'orders',
          component: CustomerOrdersScreen
        }
      ]
    },
    {
      path: '/admin',
      component: AdminWrapper,
      children: [
        {
          path: 'orders',
          component: OrdersScreen
        },
        {
          path: 'products',
          component: AdminProductsScreen
        },
        {
          path: 'create-product',
          name: 'ProductCreate',
          component: ProductCreateScreen
        },
        {
          path: 'edit-product/:id',
          name: 'ProductEdit',
          component: ProductEditScreen
        }
      ]
    }
  ]
})
