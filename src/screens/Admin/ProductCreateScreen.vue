<template>
<v-layout row justify-center>
  <v-flex xs12 sm10 md8 lg8 xl6>
    <h1>{{ msg }}</h1>
    <ProductForm
      @save-product="createProduct"
      :product="product"></ProductForm>
  </v-flex>
</v-layout>
</template>

<script>
import ProductForm from './ProductForm'
import productsService from '@/services/products'
export default {
  name: 'ProductCreate',
  data () {
    return {
      msg: 'Admin Page Create',
      product: {
        name: 'Product Name'
      }
    }
  },
  methods: {
    createProduct (product) {
      const formData = new FormData()
      formData.append('image', product.imageFile, product.imageFile.name)
      formData.append('name', product.name)
      formData.append('price', product.description)
      productsService.createProduct(formData)
    }
  },
  components: {
    ProductForm
  }
}
</script>

<style>

</style>
