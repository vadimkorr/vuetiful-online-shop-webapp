<template>
  <v-app id="app">
    <router-view />
    <v-snackbar v-if="snack"
      :value="snack"
      :timeout="5000"
      :color="getSnackColorByType(snack.type)"
      >
      {{ snack.text }}
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  methods: {
    getSnackColorByType (type) {
      switch (type) {
        case 'success':
          return 'success'
        default:
        case 'info':
          return 'info'
        case 'error':
          return 'error'
      }
    }
  },
  computed: {
    snack () {
      return this.$store.getters.snack
    }
  }
}
</script>

<style>
</style>
