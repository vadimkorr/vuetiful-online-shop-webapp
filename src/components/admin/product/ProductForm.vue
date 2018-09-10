<template>
  <form @submit.prevent="saveProduct">
    <div>
      <label>Name</label>
      <input
        type="text"
        v-model="product.name"
        name="name" />
    </div>
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  props: ['product', 'isEdit'],
  methods: {
    saveProduct () {
      console.log(`Saving: ${JSON.stringify(this.product)}`)
      this.$emit('save-product', this.product)
    }
  },
  created: () => {
    console.log(`product: ${this.product}`)
  }
}
</script>

<style>

</style>
