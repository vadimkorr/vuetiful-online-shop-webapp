<template>
  <form>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="product.name"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-textarea
      v-validate="'required|max:200'"
      v-model="product.description"
      :counter="200"
      :error-messages="errors.collect('description')"
      label="Description"
      data-vv-name="description"
      required>
    </v-textarea>
    <v-btn @click="saveProduct">Create</v-btn>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  props: ['product', 'isEdit'],
  data: () => ({
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 10 characters'
        },
        description: {
          required: () => 'Description can not be empty',
          max: 'The description field may not be greater than 200 characters'
        }
      }
    }
  }),
  methods: {
    saveProduct () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          console.log(`Saving: ${JSON.stringify(this.product)}`)
          this.$emit('save-product', this.product)
        }
      })
    }
  },
  created: () => {
    console.log(`product: ${this.product}`)
  }
}
</script>

<style>

</style>
