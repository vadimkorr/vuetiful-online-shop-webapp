<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex justify-center xs12 sm4 md3 lg3 xl2 v-for="product in prods" :key="`${product.id}`">
        <product-card :product="product" @addToCart="addToCart"></product-card>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
        @input="onPageChange"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import ProductCard from '@/shared/ProductCard'
import productsService from '../services/products'
export default {
  data () {
    return {
      products: Array.from({ length: 5 }, (v, k) => ({
        id: k,
        name: 'name of product',
        img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        price: 5
      })),
      page: 1
    }
  },
  mounted: function () {
    console.log(' mounted ')
    this.getInitProducts()
  },
  methods: {
    addToCart (prod) {
      this.$store.commit('addToCart', prod)
    },
    getProducts (page) {
      productsService.getProducts(page, 10)
        .then(p => this.$store.commit('addProds', p.data))
        .catch(e => console.log('Something went wrong', e))
    },
    getInitProducts () {
      this.getProducts(0)
    },
    onPageChange (page) {
      this.getProducts(page)
    }
  },
  computed: {
    prods () {
      console.log('from store ', this.$store.getters.products)
      return this.$store.getters.products
    }
  },
  components: {
    ProductCard
  }
}
</script>

<style>

</style>
