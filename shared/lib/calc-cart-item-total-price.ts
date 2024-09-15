import { CartItemDTO } from '../services/dto/cart.dto'

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const IngredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)

  return (IngredientsPrice + item.productItem.price) * item.quantity
}
