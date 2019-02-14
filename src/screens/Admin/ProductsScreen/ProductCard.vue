<template>
  <v-hover>
    <v-card
      @click.native="onCardClick"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="">
      <v-img
        :aspect-ratio="4/3"
        :src="product.image">
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;">
        <div class="font-weight-light grey--text title mb-2">{{ product.name }}</div>
        <div class="font-weight-light title mb-2">{{ product.price }}</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'product-card',
  props: ['product'],
  methods: {
    onCardClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
