<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="">
      <v-img
        :aspect-ratio="4/3"
        :src="getImgUrl(product.image)">
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;">
        <v-btn
          @click="addToCart()"
          absolute
          color="orange"
          class="white--text"
          fab
          right
          top>
          <v-icon>shopping_cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">{{ product.name }}</div>
        <div class="font-weight-light title mb-2">{{ `${product.price}₽` }}</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import { getImgUrl } from '@/helpers'
export default {
  name: 'product-card',
  props: ['product'],
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product)
    },
    getImgUrl (img) {
      return getImgUrl(img)
    }
  }
}
</script>

<style>

</style>
