<template>
  <v-container fluid>
    <v-layout v-if="items.length > 0">
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-5"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.userId }}</td>
            <td>
              <v-container>
                <v-layout row wrap>
                  <div class="order-card-container" v-for="orderItem in props.item.items" :key="orderItem.product.id">
                    <order-item :item="orderItem"></order-item>
                  </div>
                </v-layout>
              </v-container>
            </td>
            <td>{{ props.item.status }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <div class="text-xs-center" v-if="items.length < 1">
      <div>No orders yet :(</div>
    </div>
  </v-container>
</template>

<script>
import ordersService from '@/services/orders'
import OrderItem from './OrderItem'
export default {
  data () {
    return {
      page: 1,
      pagesCount: 0,
      headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: false,
          value: 'id',
          width: '50px'
        },
        {
          text: 'User',
          value: 'userId',
          width: '50px'
        },
        {
          text: 'Items',
          value: 'items',
          sortable: false
        },
        {
          text: 'Status',
          value: 'status',
          width: '150px'
        }
      ],
      items: []
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
          this.items = p.data.items
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
  components: {
    OrderItem
  }
}
</script>

<style>
  .order-card-container {
    width: 150px;
    padding: 5px;
  }
</style>
