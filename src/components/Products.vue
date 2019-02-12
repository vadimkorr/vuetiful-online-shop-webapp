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
        :length="pagesCount"
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
      page: 1,
      pagesCount: 0
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
      const itemsPerPage = 10
      const start = itemsPerPage * (page - 1)
      const count = itemsPerPage
      productsService.getProducts(start, count)
        .then(p => {
          this.pagesCount = p.data.pages
          this.$store.commit('addProds', p.data.products)
        })
        .catch(e => console.log('Something went wrong', e))
    },
    getInitProducts () {
      const initPage = 1
      this.getProducts(initPage)
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
