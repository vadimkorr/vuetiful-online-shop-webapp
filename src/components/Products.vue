<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex justify-center xs12 sm4 md3 lg3 xl2 v-for="product in products" :key="`${product.id}`">
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="">
            <v-img
              :aspect-ratio="4/3"
              :src="product.imgSrc">
            </v-img>
            <v-card-text
              class="pt-4"
              style="position: relative;">
              <v-btn
                @click="addToCart(product)"
                absolute
                color="orange"
                class="white--text"
                fab
                right
                top>
                <v-icon>shopping_cart</v-icon>
              </v-btn>
              <div class="font-weight-light grey--text title mb-2">{{ product.name }}</div>
              <div class="font-weight-light title mb-2">{{ product.price }}</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>  

<script>
export default {
  data () {
    return {
      products: Array.from({ length: 5 }, (v, k) => ({
        id: k,
        name: 'name of product',
        imgSrc: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        price: 5
      }))
    }
  },
  methods: {
    addToCart(prod) {
      alert('added ' + JSON.stringify(prod))
    }
  }
}
</script>

<style>

</style>
