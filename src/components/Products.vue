<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex justify-center xs12 sm4 md3 lg3 xl2 v-for="product in products" :key="`${product.id}`">
        <product-card :product="product" @addToCart="addToCart"></product-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>  

<script>
import ProductCard from '@/shared/ProductCard'
export default {
  data () {
    return {
      products: Array.from({ length: 5 }, (v, k) => ({
        id: k,
        name: 'name of product',
        img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        price: 5
      }))
    }
  },
  methods: {
    addToCart(prod) {
      // alert('added ' + JSON.stringify(prod))
      this.$store.commit('addToCart', prod);
    }
  },
  components: {
    ProductCard
  }
}
</script>

<style>

</style>
