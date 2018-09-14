<template>
  <v-flex d-flex row align-center>
    <v-btn fab dark small color="primary" @click="onDec">
      <v-icon dark>remove</v-icon>
    </v-btn>
    <div>{{ count }}</div>
    <v-btn fab dark small color="primary" @click="onInc">
      <v-icon dark>add</v-icon>
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  props: ['min', 'init'],
  data () {
    return {
      count: this.init || 0
    }
  },
  methods: {
    onInc() {
      this.count++
      this.$emit('onChange', this.count)
    },
    onDec() {
      this.count = this.count > this.min ? this.count - 1 : this.min 
      this.$emit('onChange', this.count)
    }
  }
}
</script>

<style>

</style>
