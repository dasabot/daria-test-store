import { MoneyV2 } from '@shopify/hydrogen/storefront-api-types'

export type PriceProps = {
  price: MoneyV2
  compareAtPrice?: MoneyV2 | null
  containerClassName?: string
  priceClassName?: string
  compareAtPriceClassName?: string
}
