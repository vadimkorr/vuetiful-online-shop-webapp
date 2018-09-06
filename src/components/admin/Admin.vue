<template>
  <div>
    <div>
      <div class="title">
        <h1>{{ msg }}</h1>
      </div>
    </div>
    <ul>
      <li><router-link to="/admin">View Products</router-link></li>
      <li><router-link to="/admin/new">New Product</router-link></li>
      <li><router-link to="/admin/edit/123">Edit Product</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Admin Page'
    }
  }
}
</script>

<style>
</style>
