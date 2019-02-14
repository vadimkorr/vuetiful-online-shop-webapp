<template>
    <v-card class="elevation-5">
      <v-img
        class="white--text"
        height="100px"
        :src="'http://localhost:8080/products/' + item.product.img"
      >
      </v-img>
      <v-card-title>
        <div>
          <span>Product: {{ item.product.id }}</span><br>
          <span>x{{ item.count }}</span>
        </div>
      </v-card-title>
    </v-card>
</template>

<script>
export default {
  name: 'app-order-item',
  props: ['item']
}
</script>

<style>

</style>
