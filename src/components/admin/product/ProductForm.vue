<template>
  <form @submit.prevent="saveProduct">
    <div>
      <label>Name</label>
      <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      <input
        type="text"
        v-model="product.name"
        v-validate="'required'"
        :class="{'input': true, 'error': errors.has('name')}"
        name="name" />
    </div>
    <button class="button is-primary" :disabled="errors.any()" type="submit" >Create</button>
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
