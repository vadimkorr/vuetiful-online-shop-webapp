<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12 sm6 lg4>
        <h2>Create product</h2>
        <product-form
          @save-product="createProduct"
          :product="product"
          ref="prodForm"
        ></product-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductForm from './ProductForm'
import productsService from '@/services/products'
export default {
  data () {
    return {
      msg: 'Admin Page Create',
      product: {
        name: '',
        price: ''
      }
    }
  },
  methods: {
    resetProduct () {
      this.product = {}
      this.$refs.prodForm.reset()
    },
    createProduct (product) {
      const formData = new FormData()
      formData.append('image', product.imageFile, product.imageFile.name)
      formData.append('name', product.name)
      formData.append('price', product.price)
      productsService.createProduct(formData)
        .then(() => {
          this.resetProduct()
          this.$store.commit('openSnack', {
            text: 'Product created succesfully',
            type: 'success'
          })
        })
        .catch(e => {
          this.$store.commit('openSnack', {
            text: 'Something went wrong',
            type: 'error'
          })
        })
    }
  },
  components: {
    ProductForm
  }
}
</script>

<style>

</style>
