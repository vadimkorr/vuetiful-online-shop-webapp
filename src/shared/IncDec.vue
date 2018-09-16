<template>
  <div>
    <v-flex d-flex row align-center>
      <v-btn fab outline  small color="primary" @click="onDec">
        <v-icon dark>remove</v-icon>
      </v-btn>
      <div class="counter">{{ count }}</div>
      <v-btn fab outline small color="primary" @click="onInc">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-flex>
  </div>
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
.counter {
  width: 30px;
  text-align: center;
}
</style>
