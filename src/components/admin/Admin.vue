<template>
  <div class="columns">
    <div class="column is-one-third">
      <aside class="menu">
        <ul class="menu-list">
          <li><router-link exact-active-class="is-active" to="/admin">View Products</router-link></li>
          <li><router-link exact-active-class="is-active" to="/admin/new">New Product</router-link></li>
          <li><router-link exact-active-class="is-active" to="/admin/edit/123">Edit Product</router-link></li>
        </ul>
      </aside>
    </div>
    <div class="column">
      <router-view/>
    </div>
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
