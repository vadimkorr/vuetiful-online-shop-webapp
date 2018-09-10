<template>
<div id="app">

  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="./assets/logo.png" alt="Logo" width="50">
      </router-link>
      <div class="navbar-burger burger" :class="{ 'is-active': isMenuActive }" @click="isMenuActive = !isMenuActive">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" exact-active-class="is-active" to="/admin">Admin</router-link>
        <router-link class="navbar-item" exact-active-class="is-active" to="/cart">Cart</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link class="button" exact-active-class="is-active" to="/login">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>
                  Login
                </span>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isMenuActive: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
