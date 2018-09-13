<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        :clipped="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        fixed
        app>
        <v-list>
          <template v-for="item in items">
            <template v-if="item.items">
              <v-list-group
                v-model="item.active"
                :key="item.title"
                :prepend-icon="item.icon"
                :append-icon="'keyboard_arrow_down'"
                no-action>
                <v-list-tile slot="activator">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile
                  v-for="subItem in item.items"
                  :key="subItem.title"
                  :to="subItem.link"
                  @click="">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>{{ subItem.icon }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </template>
            <template v-else>
              <v-list-tile
                :key="item.title"
                :to="item.link">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </template>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">Google Contacts</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
          class="hidden-sm-and-down">
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>shopping_cart</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
              alt="Vuetify">
          </v-avatar>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <router-view/>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    items: [
      {
        icon: 'local_activity',
        title: 'Products',
        link: '/products'
      },
      {
        icon: 'local_activity',
        title: 'Admin',
        active: true,
        items: [
          { title: 'Products', icon: '', link: '/admin' },
          { title: 'Create Product', icon: '', link: '/create-product' }
        ]
      }
    ]
  })
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
} */
</style>
