<template>
  <!-- <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div> -->
    <v-layout row justify-center>
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
      </v-flex>
    </v-layout>
</template>

<script>
import ProductCard from '@/shared/ProductCard'
import ProductRow from '@/shared/ProductRow'

export default {
  name: 'Cart',
  data () {
    return {
      msg: 'Cart Page'
    }
  },
  methods: {
    onProdRemove (product) {
      this.$store.commit('removeFromCart', product);
    },
    onChange (product, count) {
      this.$store.commit('setCartProductCount', {
        product,
        count
      });
    }
  },
  computed: {
    products () {
      return this.$store.state.cart.products
    }
  },
  components: {
    ProductCard, ProductRow
  }
}
</script>

<style>
</style>
