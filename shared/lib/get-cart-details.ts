import { Cart } from '@prisma/client'
import { CartDTO } from '../services/dto/cart.dto'

export type CartStateItem = {
  id: number
  quantity: number
  name: string
  imageUrl: string
  price: number
  pizzaSize?: number | null
  type?: number | null
  ingredients: Array<{ name: string; price: number }>
}

interface ReturnProps {
  items: CartStateItem[]
  totalAmount: number
}

export const getCartDetails = (data: CartDTO) => {
  const item = data.items.map(item => ({
    id: item.id,
    quantity: item.quantity,
    name: item.ProductItem.product.name,
    imageUrl: item.ProductItem.product.imageUrl,
  }))
  return {
    totalAmount: data.totalAmount,
  }
}
