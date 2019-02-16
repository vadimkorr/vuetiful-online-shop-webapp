<template>
  <form>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="product.name"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      data-vv-as="name"
    ></v-text-field>
    <v-text-field
      v-validate="'required|decimal'"
      v-model="product.price"
      :error-messages="errors.collect('price')"
      label="Price"
      data-vv-name="price"
      data-vv-as="price"
    ></v-text-field>
    <template>
      <img :src="product.imgUrl" height="150" v-if="product.imgUrl"/>
      <v-text-field label="Select Image" @click="pickFile" v-model="img.name" prepend-icon="attach_file"></v-text-field>
      <input
        type="file"
        style="display: none"
        ref="image"
        accept="image/*"
        @change="onFilePicked" />
    </template>
    <v-btn @click="saveProduct">Save</v-btn>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  props: ['product', 'isEdit'],
  data: () => ({
    img: {
      name: ''
    }
  }),
  methods: {
    reset () {
      this.img = {
        name: ''
      }
    },
    saveProduct () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.$emit('save-product', this.product)
        }
      })
    },
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.img.name = files[0].name
        if (this.img.name.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.product.imageFile = files[0]
          this.product.imgUrl = fr.result
        })
      } else {
        this.img.name = ''
      }
    }
  }
}
</script>

<style>

</style>
