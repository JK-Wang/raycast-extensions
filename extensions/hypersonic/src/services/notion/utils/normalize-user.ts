import { User } from '@/types/user'

export const normalizeUser = (item: any): User => {
  return {
    id: item.id,
    name: item.name,
    icon: item.avatar_url || null,
  }
}
