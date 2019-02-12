import { get, remove, upload } from '../helpers/http'
import { Urls } from '../consts/urls'

export default {
  getProducts: (start, count) => {
    return get(Urls.getProducts, { start, count })
  },
  getProduct: id => {
    return get(`${Urls.getProduct}/${id}`)
  },
  createProduct: (formData) => {
    return upload(Urls.createProduct, formData)
  },
  updateProduct: (id, data) => {
    return upload(`${Urls.updateProduct}/${id}`, data)
  },
  removeProduct: data => {
    return remove(Urls.removeProduct, data)
  }
}
