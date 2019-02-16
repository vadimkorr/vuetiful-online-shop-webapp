import { post } from '../helpers/http'
import { Urls } from '@/consts'

export const authService = {
  signIn: (model) => {
    return post(Urls.signIn, model)
  },
  signUp: (model) => {
    return post(Urls.signUp, model)
  }
}
