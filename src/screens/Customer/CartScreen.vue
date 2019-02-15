<template>
  <v-layout row justify-center v-if="products.length > 0">
    <v-flex xs12 sm12 md10 lg6 xl6>
      <v-list>
        <div
          v-for="(product, index) in products"
          :key="`${product.id}`">
          <v-list-tile >
            <v-list-tile-avatar>
              <img :src="getImgUrl(product.image)">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="`${product.name}`"></v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ `${product.price}₽ x ${product.count} = ${recalc(product.price, product.count)}` }}₽</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <inc-dec @onInc="onInc(product)" @onDec="onDec(product)"></inc-dec>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-btn
                @click="onProdRemove(product)"
                color="red"
                class="white--text"
                small
                icon
                fab>
                <v-icon>delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="index + 1 < products.length"></v-divider>
        </div>
      </v-list>
      <div>
        <div class="overall-sum">
          <span>Total: {{ overallSum }}₽</span>
        </div>
        <div class="make-order-btn">
          <v-btn @click="makeOrder()" color="primary">Make an order</v-btn>
        </div>
      </div>
    </v-flex>

    <v-dialog
      v-model="removeConfirDialog"
      max-width="290">
      <v-card>
        <v-card-title class="headline">Remove product</v-card-title>
        <v-card-text>
          Do you really want to remove '{{productToRemove.name}}' from your cart?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="removeConfirDialog = false">Cancel</v-btn>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="onProdRemoveConfirm">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <v-flex d-flex justify-center align-center v-else>Cart is empty :(</v-flex>
</template>

<script>
import ProductCard from '@/shared/ProductCard'
import IncDec from '@/shared/IncDec'
import ordersService from '@/services/orders'
import { getImgUrl } from '@/helpers'

export default {
  name: 'Cart',
  data () {
    return {
      removeConfirDialog: false,
      productToRemove: {}
    }
  },
  methods: {
    onProdRemove (product) {
      this.productToRemove = product
      this.removeConfirDialog = true
    },
    onProdRemoveConfirm () {
      this.removeConfirDialog = false
      this.$store.commit('removeFromCart', this.productToRemove)
    },
    onInc (product) {
      this.$store.commit('setCartProductCount', {
        product,
        count: product.count + 1
      })
    },
    onDec (product) {
      if (product.count - 1 === 0) {
        this.productToRemove = product
        this.removeConfirDialog = true
      } else {
        this.$store.commit('setCartProductCount', {
          product,
          count: product.count - 1
        })
      }
    },
    recalc (price, count) {
      return ((count || 0) * price).toFixed(2)
    },
    getImgUrl (img) {
      return getImgUrl(img)
    },
    makeOrder () {
      const order = this.products.map(p => ({ id: p.id, count: p.count }))
      ordersService.createOrder(order)
        .then(() => {
          this.$store.commit('openSnack', {
            text: 'Order is created succesfully',
            type: 'success'
          })
          this.$store.commit('clearCart')
          this.$router.push({ path: '/customer' })
        })
        .catch(e => {
          this.$store.commit('openSnack', {
            text: 'Something went wrong',
            type: 'error'
          })
        })
    }
  },
  computed: {
    products () {
      return this.$store.state.cart.products
    },
    overallSum () {
      let sum = 0
      this.$store.state.cart.products.forEach(p => {
        sum += p.count * p.price
      })
      return (sum || 0).toFixed(2)
    }
  },
  components: {
    ProductCard, IncDec
  }
}
</script>

<style>
.overall-sum {
  text-align: right;
  font-size: 25px;
  padding-top: 30px;
  padding-right: 20px;
}
.incdec {
  width: 100%
}
.overall-price {
  text-align: center;
  flex: 1 0 50px !important;
}
.make-order-btn {
  text-align: right;
}
</style>
