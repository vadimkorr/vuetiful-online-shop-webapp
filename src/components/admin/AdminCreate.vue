<template>
  <div>
    <h1>{{ msg }}</h1>
    <ProductForm
      @save-product="createProduct"
      :product="product"
    ></ProductForm>
  </div>
</template>

<script>
import ProductForm from '@/components/admin/product/ProductForm.vue'
export default {
  name: 'AdminCreate',
  data () {
    return {
      msg: 'Admin Page Create',
      product: {
        name: 'Product Name'
      }
    }
  },
  methods: {
    createProduct () {
      // alert('saved!')
    }
  },
  components: {
    ProductForm
  }
}
</script>

<style>

</style>
