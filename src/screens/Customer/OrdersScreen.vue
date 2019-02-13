<template>
  <v-container grid-list-md>
    <v-flex d-flex justify-center xs12 sm4 md3 lg3 xl2 v-for="order in orders" :key="`${order.id}`">
      {{order}}
    </v-flex>
    <div class="text-xs-center">
      <v-pagination
        v-if="orders.length > 0"
        v-model="page"
        :length="pagesCount"
        :total-visible="7"
        @input="onPageChange"
      ></v-pagination>
      <div
        v-if="orders.length < 1"
      >No orders yet :(</div>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      pagesCount: 0
    }
  },
  mounted: function () {
    this.getInitOrders()
  },
  methods: {
    getOrders (page) {
      const itemsPerPage = 10
      const start = itemsPerPage * (page - 1)
      const count = itemsPerPage
      ordersService.getOrders(start, count)
        .then(p => {
          this.pagesCount = p.data.pages
          this.$store.commit('addOrders', p.data.items)
        })
        .catch(e => console.log('Something went wrong', e))
    },
    getInitOrders () {
      const initPage = 1
      this.getOrders(initPage)
    },
    onPageChange (page) {
      this.getOrders(page)
    }
  },
  computed: {
    orders () {
      return this.$store.getters.orders
    }
  }
}
</script>

<style>

</style>
