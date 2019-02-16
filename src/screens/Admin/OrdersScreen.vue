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
                    :title="orderItem.product.name"
                    :subtitle="`${orderItem.count} x ${orderItem.product.price}₽`"
                    :imgSrc="getImgUrl(orderItem.product.img)"
                    class="order-card-container"
                    v-for="orderItem in props.item.items"
                    :key="orderItem.product.id" />
                </v-layout>
              </v-container>
            </td>
            <td>
              <v-select
                :items="statuses"
                @change="onStatusChange(props.item)"
                item-value="id"
                item-text="value"
                v-model="props.item.status"
              ></v-select>
            </td>
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
import { statuses } from '@/consts'
import { getOrderSum, getImgUrl } from '@/helpers'
export default {
  data () {
    return {
      totalItems: 0,
      items: [],
      loading: true,
      statuses: statuses,
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
          width: '200px',
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
      const { sortBy, descending, page, rowsPerPage } = this.pagination
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
    },
    getImgUrl (img) {
      return getImgUrl(img)
    },
    onStatusChange (item) {
      ordersService.changeOrderStatus(item.id, item.status)
    },
    getOrderSum (orderItems) {
      return getOrderSum(orderItems)
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
