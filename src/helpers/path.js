import { SERVER_URL } from '@/consts'

export const getImgUrl = (img) => {
  return `${SERVER_URL}${img}`
}
