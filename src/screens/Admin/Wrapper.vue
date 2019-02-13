<template>
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
                @click="() => {}">
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
        <span class="hidden-sm-and-down">Online Store</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      {
        icon: 'local_activity',
        title: 'Orders',
        link: '/admin/orders'
      },
      {
        icon: 'local_activity',
        title: 'Products',
        active: true,
        items: [
          { title: 'Products', icon: 'local_activity', link: '/admin/products' },
          { title: 'Create', icon: 'local_activity', link: '/admin/create-product' }
        ]
      }
    ]
  })
}
</script>

<style>

</style>
