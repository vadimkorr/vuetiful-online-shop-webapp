import { get, post } from '../helpers/http'
import { Urls } from '../consts/urls'

export default {
  getOrders: (start, count) => {
    return get(Urls.getOrders, { start, count })
  },
  getOrdersOfUser: (start, count) => {
    return get(Urls.getOrdersOfUser, { start, count })
  },
  getOrder: id => {
    return get(`${Urls.getOrder}/${id}`)
  },
  createOrder: items => {
    return post(Urls.createOrder, { items, status: 'created' })
  },
  changeOrderStatus: (id, status) => {
    return post(`${Urls.getOrder}/${id}`, { status })
  }
}
