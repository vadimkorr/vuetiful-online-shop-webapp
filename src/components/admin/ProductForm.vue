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
    <template>
      <img :src="imageUrl" height="150" v-if="imageUrl"/>
      <v-text-field label="Select Image" @click="pickFile" v-model="imageName" prepend-icon="attach_file"></v-text-field>
      <input
        type="file"
        style="display: none"
        ref="image"
        accept="image/*"
        @change="onFilePicked" />
    </template>
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
    },
    imageName: '',
    imageUrl: '',
    imageFile: ''
  }),
  methods: {
    saveProduct () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          console.log(`Saving: ${JSON.stringify(this.product)}`)
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
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
          this.product.imageFile = this.imageFile
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    }
  },
  created: () => {
    console.log(`product: ${this.product}`)
  }
}
</script>

<style>

</style>
