<template>
  <v-card class="elevation-5">
    <v-img
      class="white--text"
      height="100px"
      :src="imgSrc"
    >
    </v-img>
    <v-card-title>
      <div>
        <span>{{ title }}</span><br>
        <span>{{ subtitle }}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'imgSrc'],
  name: 'app-order-item'
}
</script>

<style>

</style>
