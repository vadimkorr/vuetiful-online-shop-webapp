<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex justify-center xs12 sm4 md3 lg3 xl2 v-for="product in items" :key="`${product.id}`">
        <product-card :product="product" @click="editProduct(product.id)"></product-card>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-pagination
        v-if="items.length > 0"
        v-model="page"
        :length="pagesCount"
        :total-visible="7"
        @input="onPageChange"
      ></v-pagination>
      <div
        v-if="items.length < 1"
      >No products yet :(</div>
    </div>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard'
import productsService from '@/services/products'
export default {
  data () {
    return {
      page: 1,
      pagesCount: 0,
      items: []
    }
  },
  mounted: function () {
    this.getInitProducts()
  },
  methods: {
    editProduct (id) {
      this.$router.push({
        path: `/admin/edit-product/${id}`
      })
    },
    getProducts (page) {
      const itemsPerPage = 10
      const start = itemsPerPage * (page - 1)
      const count = itemsPerPage
      productsService.getProducts(start, count)
        .then(p => {
          this.pagesCount = p.data.pages
          this.items = p.data.products
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
  components: {
    ProductCard
  }
}
</script>

<style>

</style>
