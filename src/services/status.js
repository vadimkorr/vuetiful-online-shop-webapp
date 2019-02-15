import { statuses } from '@/consts'

export const getStatusById = (id) => {
  return statuses.find(s => s.id === id).value
}
