<template>
  <div>
    <v-flex d-flex row align-center>
      <div class="mr">
        <v-btn fab outline small color="primary" @click="onDec">
          <v-icon dark>remove</v-icon>
        </v-btn>
      </div>
      <v-btn fab outline small color="primary" @click="onInc">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-flex>
  </div>
</template>

<script>
export default {
  methods: {
    onInc () {
      this.$emit('onInc')
    },
    onDec () {
      this.$emit('onDec')
    }
  }
}
</script>

<style>
  .mr {
    margin-right: 10px
  }
</style>
