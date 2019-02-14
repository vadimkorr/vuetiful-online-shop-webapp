<template>
  <v-container fluid>
    <v-layout v-if="items.length > 0">
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="items"
          :pagination.sync="pagination"
          :total-items="totalItems"
          :loading="loading"
          :rows-per-page-items="[5, 10, 25]"
          class="elevation-5"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.userId }}</td>
            <td>{{ props.item.createdAt
              ? new Date(props.item.createdAt).toLocaleString().split(',').map(s => s.trim()).join('\n')
              : props.item.createdAt}}</td>
            <td>
              <v-container>
                <v-layout row wrap>
                  <order-item
                    :item="orderItem"
                    class="order-card-container"
                    v-for="orderItem in props.item.items"
                    :key="orderItem.product.id" />
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
      totalItems: 0,
      items: [],
      loading: true,
      pagination: {
        sortBy: '',
        descending: true,
        page: 1,
        rowsPerPage: 10
      },
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
          width: '50px',
          sortable: false
        },
        {
          text: 'Created',
          value: 'createdAt',
          width: '50px',
          sortable: false
        },
        {
          text: 'Items',
          value: 'items',
          sortable: false
        },
        {
          text: 'Status',
          value: 'status',
          width: '150px',
          sortable: false
        }
      ]
    }
  },
  watch: {
    pagination: {
      handler () {
        this.getOrders()
      },
      deep: true
    }
  },
  mounted: function () {
    this.getOrders()
  },
  methods: {
    getOrders () {
      this.loading = true
      const { sortBy, descending, page, rowsPerPage } = this.pagination

      console.log(sortBy, descending, page, rowsPerPage)

      const start = rowsPerPage * (page - 1)
      ordersService.getOrders(start, rowsPerPage)
        .then(res => {
          this.loading = false
          this.items = res.data.items
          this.totalItems = res.data.totalItems
        })
        .catch(e => {
          this.loading = false
          console.log('Something went wrong', e)
        })
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
    margin: 5px;
  }
</style>
