<template>
<div>
  <v-list-tile>
    <v-list-tile-avatar>
      <img :src="product.img">
    </v-list-tile-avatar>
    <v-list-tile-content row>
      <v-flex d-flex align-center class="row-controls">
        <v-list-tile-title v-html="`${product.name} (${product.price}₽)`"></v-list-tile-title>
        <inc-dec @onChange="onChange" :min=0 :init="product.count"></inc-dec>
        <div class="overall-price">{{ overallPrice }}₽</div>
      </v-flex>
    </v-list-tile-content>
    <v-list-tile-action>
      <div>
        <v-btn
          @click="onRemove(product)"
          color="red"
          class="white--text"
          small
          icon
          fab>
          <v-icon>delete</v-icon>
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
  data () {
    return {
      overallPrice: this.recalc(this.product.price, this.product.count)
    }
  },
  methods: {
    recalc (price, count) {
      return (count || 0) * price
    },
    onRemove () {
      this.$emit('onRemove', this.product)
    },
    onChange (count) {
      this.overallPrice = this.recalc(this.product.price, count)
      this.$emit('onChange', this.product, count)
    }
  },
  components: {
    IncDec
  }
}
</script>

<style scoped>
.row-controls {
  width: 100%;
}
.overall-price {
  text-align: center;
  flex: 1 0 50px !important;
}
</style>
