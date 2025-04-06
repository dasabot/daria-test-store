import { Money } from '@shopify/hydrogen'
import { PriceProps } from './types'
import clsx from 'clsx'

const Price = ({
  price,
  compareAtPrice,
  containerClassName,
  compareAtPriceClassName,
  priceClassName,
}: PriceProps) => {
  const hasDiscount = compareAtPrice && parseFloat(compareAtPrice.amount) > 0

  return (
    <div className={clsx(containerClassName, 'flex gap-[8px]')}>
      {hasDiscount ? (
        <Money
          className={clsx(compareAtPriceClassName, 'line-through leading-[16px] text-gray-900 ')}
          as="span"
          data={compareAtPrice}
        />
      ) : null}
      <Money
        data={price}
        as="span"
        className={clsx(
          priceClassName,
          `${hasDiscount ? 'text-red-600' : 'text-gray-900 '} leading-[16px]`,
        )}
      />
    </div>
  )
}
export default Price
