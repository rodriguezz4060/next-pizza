import { Cart, CartItem, Ingredient, Product, ProductItem } from '@prisma/client'

export type CartItemDTO = CartItem & {
  ProductItem: ProductItem & {
    product: Product
  }
  ingredients: Ingredient[]
}

export interface CartDTO extends Cart {
  items: CartItemDTO[]
}
