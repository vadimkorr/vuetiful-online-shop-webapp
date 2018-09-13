<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex justify-center xs12 sm4 md3 lg3 xl2 v-for="product in products" :key="`${product.id}`">
          <product-card :product="product"></product-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ProductCard from '@/shared/ProductCard'

export default {
  name: 'Cart',
  data () {
    return {
      msg: 'Cart Page'
    }
  },
  computed: {
    products () {
      return this.$store.state.cart.products
    }
  },
  components: {
    ProductCard
  }
}
</script>

<style>
</style>
