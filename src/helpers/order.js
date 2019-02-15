export const getOrderSum = (orderItems) => {
  return orderItems.map(i => i.product.price * i.count).reduce((acc, curr) => acc + curr, 0)
}
