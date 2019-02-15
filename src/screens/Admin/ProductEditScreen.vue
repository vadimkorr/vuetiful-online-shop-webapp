<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12 sm6 lg4>
        <h2>Update product: {{ product.id }}</h2>
        <product-form
          @save-product="updateProduct"
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
import { getImgUrl } from '@/helpers'
export default {
  data () {
    return {
      product: {
        id: '',
        name: '',
        price: '',
        imgUrl: ''
      }
    }
  },
  mounted: function () {
    productsService.getProduct(this.$route.params.id)
      .then(prod => {
        this.product = {
          id: prod.data.id,
          name: prod.data.name,
          price: prod.data.price,
          imgUrl: getImgUrl(prod.data.image)
        }
      })
      .catch(() => {
        this.$store.commit('openSnack', {
          text: 'Something went wrong',
          type: 'error'
        })
      })
  },
  methods: {
    resetProduct () {
      this.product = {}
      this.$refs.prodForm.reset()
    },
    updateProduct (product) {
      const formData = new FormData()
      if (product.imageFile) {
        formData.append('image', product.imageFile, product.imageFile.name)
      }
      formData.append('name', product.name)
      formData.append('price', product.price)
      productsService.updateProduct(product.id, formData)
        .then(() => {
          this.resetProduct()
          this.$store.commit('openSnack', {
            text: 'Product updated succesfully',
            type: 'success'
          })
          this.$router.push({
            path: '/admin/products'
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
