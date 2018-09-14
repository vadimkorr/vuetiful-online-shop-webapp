<template>
  <v-badge
    color="purple"
    overlap>
    <div 
      v-if="count > 0"
      slot="badge"
      dark
      small>{{ count }}</div>
    <v-icon large>{{ icon }}</v-icon>
  </v-badge>
</template>

<script>
export default {
  name: 'countable-icon',
  props: ['count', 'icon']
}
</script>

<style>

</style>
