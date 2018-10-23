import { get, post, remove } from '../helpers/http';
import { Urls } from '../consts/urls';

export default (ordersService = {
  getOrders: (start, count) => {
    return get(Urls.getOrders, { start, count });
  },
  getOrder: id => {
    return get(`${Urls.getOrder}/${id}`);
  },
  createOrder: items => {
    return post(Urls.createOrder, items);
  },
  changeOrderStatus: (id, status) => {
    return post(`${Urls.getOrder}/${id}`, { status });
  }
});
