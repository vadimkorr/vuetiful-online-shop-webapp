<template>
  <v-layout row justify-center v-if="products.length > 0">
    <v-flex xs12 sm12 md10 lg6 xl6>
      <v-list>
        <product-row
          v-for="(product, index) in products"
          :key="`${product.id}`"
          :product="product"
          :showDivider="index + 1 < products.length"
          @onChange="onChange"
          @onRemove="onProdRemove">
        </product-row>
      </v-list>
      <div>
        <div class="overall-sum">
          <span>Total: {{ overallSum }}₽</span>
        </div>
        <div class="make-order-btn">
          <v-btn color="primary">Make an order</v-btn>
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
import ProductRow from '@/shared/ProductRow'

export default {
  name: 'Cart',
  data () {
    return {
      msg: 'Cart Page',
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
    onChange (product, count) {
      this.$store.commit('setCartProductCount', {
        product,
        count
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
      return sum || 0
    }
  },
  components: {
    ProductCard, ProductRow
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
.make-order-btn {
  text-align: right;
}
</style>
