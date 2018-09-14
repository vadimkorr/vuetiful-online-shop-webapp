<template>
<div>
  <v-list-tile>
    <v-list-tile-avatar>
      <img :src="product.img">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-flex d-flex align-center>
        <v-list-tile-title v-html="product.name"></v-list-tile-title>
        <inc-dec @onChange="onChange" :min=0 :init="product.count"></inc-dec>
      </v-flex>
    </v-list-tile-content>
    <v-list-tile-action>
      <div>
        <v-btn
          @click="onRemove(product)"
          color="red"
          class="white--text"
          small
          fab>
          <v-icon>shopping_cart</v-icon>
        </v-btn>
      </div>
    </v-list-tile-action>
  </v-list-tile>
  <v-divider v-if="showDivider"></v-divider>
</div>
</template>

<script>
import IncDec from '@/shared/IncDec'

export default {
  props: ['product', 'showDivider'],
  methods: {
    onRemove () {
      this.$emit('onRemove', this.product)
    },
    onChange(count) {
      this.$emit('onChange', this.product, count)
    }
  },
  components: {
    IncDec
  }
}
</script>

<style>

</style>
