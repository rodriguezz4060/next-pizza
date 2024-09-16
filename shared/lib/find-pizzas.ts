export interface GetSearchParams {
  query?: string
  sortBy?: string
  sizes?: string
  pizzaTypes?: string
  ingredients?: string
  priceFrom?: string
  priceTo?: string
}

const DEFAULT_MIN_PRICE = 0
const DEFAULT_MAX_PRICE = 1000
