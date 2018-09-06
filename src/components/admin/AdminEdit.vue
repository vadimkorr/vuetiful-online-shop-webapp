<template>
  <div>
    <div class="title">
      <h1>{{ msg }}: {{ $route.params.id }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminEdit',
  data () {
    return {
      msg: 'Admin Page Edit'
    }
  }
}
</script>

<style>

</style>
