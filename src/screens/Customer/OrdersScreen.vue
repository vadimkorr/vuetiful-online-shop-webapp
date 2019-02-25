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
            <td>{{ props.item.createdAt
              ? new Date(props.item.createdAt).toLocaleString().split(',').map(s => s.trim()).join('\n')
              : props.item.createdAt }}</td>
            <td>
              <v-container>
                <v-layout row wrap>
                  <order-item
                    :title="prod.product.name"
                    :subtitle="`${prod.count} x ${prod.product.price}₽`"
                    :imgSrc="getImgUrl(prod.product.img)"
                    class="order-card-container"
                    v-for="prod in props.item.items"
                    :key="prod.product.id" />
                </v-layout>
              </v-container>
            </td>
            <td>{{ getStatusById(props.item.status) }}</td>
            <td>{{ `${getOrderSum(props.item.items)}₽` }}</td>
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
import { OrderItem } from '@/shared'
import { getStatusById } from '@/services'
import { getOrderSum, getImgUrl } from '@/helpers'
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
        },
        {
          text: 'Sum',
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
      const { page, rowsPerPage } = this.pagination
      const start = rowsPerPage * (page - 1)
      ordersService.getOrdersOfUser(start, rowsPerPage)
        .then(res => {
          this.loading = false
          this.items = res.data.items
          this.totalItems = res.data.totalItems
        })
        .catch(e => {
          this.loading = false
          console.log('Something went wrong', e)
        })
    },
    getStatusById (id) {
      return getStatusById(id)
    },
    getOrderSum (orderItems) {
      return getOrderSum(orderItems)
    },
    getImgUrl (img) {
      return getImgUrl(img)
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
