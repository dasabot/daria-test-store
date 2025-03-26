import { ProductCardProps } from './types'
import { ProductVariantFragment } from 'storefrontapi.generated'
import { useState, useMemo, useCallback } from 'react'
import { currencies } from '~/lib/currencies'
import clsx from 'clsx'
import { getParsedPrice } from '~/lib/helpers'

const ProductCard = ({ product, className }: ProductCardProps) => {
  if (!product) return null

  const { title, brand, handle, options, variants } = product
  const optionValues = options?.[0]?.optionValues ?? []

  const [selectedVariant, setSelectedVariant] = useState(variants.nodes[0])
  const [currentImage, setCurrentImage] = useState(
    selectedVariant?.mainImage?.reference?.image?.url,
  )
  const [hoverImage, setHoverImage] = useState(selectedVariant?.hoverImage?.reference?.image?.url)

  const priceSymbol = currencies[selectedVariant?.price?.currencyCode] ?? currencies.USD

  const hasDiscount = useMemo(() => {
    const comparePrice = selectedVariant?.compareAtPrice?.amount ?? '0'
    return parseFloat(comparePrice) > parseFloat(selectedVariant.price.amount)
  }, [selectedVariant])

  const changeCurrentVariant = useCallback((variant: ProductVariantFragment) => {
    setSelectedVariant(variant)
    setHoverImage(variant?.hoverImage?.reference?.image?.url)
    setCurrentImage(variant?.mainImage?.reference?.image?.url)
  }, [])

  return (
    <div className={clsx(className, 'w-[315px] h-[452px] flex flex-col relative gap-[15px]')}>
      {hasDiscount && (
        <div className="bg-white absolute top-[20px] left-[20px] border border-red-500 rounded-[25.61px] px-[12.8px] py-[6.4px]">
          <span className="text-red-500 franklinGothicFont text-[15px] font-medium">On Sale!</span>
        </div>
      )}
      <a
        href={`/products/${handle}`}
        className="h-[340px] w-[315px] px-[20px] py-[20px] border rounded-[10px] bg-center bg-contain border-[#f8f8f8]"
        onMouseEnter={() => setCurrentImage(hoverImage)}
        onMouseLeave={() => setCurrentImage(selectedVariant?.mainImage?.reference?.image?.url)}
      >
        <img className="h-[301px] w-auto object-contain" src={currentImage} alt={title} />
      </a>
      <div className="flex gap-[5px]">
        {optionValues.map((option) => {
          const isSelected = selectedVariant.id === option?.firstSelectableVariant?.id
          return (
            <button
              key={option.id}
              className={`w-[24px] h-[24px] rounded-full flex justify-center items-center ${
                isSelected ? 'border border-[rgba(10,72,116,1)]' : ''
              }`}
              onClick={() =>
                changeCurrentVariant(option.firstSelectableVariant || variants.nodes[0])
              }
            >
              <div
                className="w-[20px] h-[20px] rounded-full"
                style={{
                  backgroundColor: option.firstSelectableVariant?.colorHex?.value ?? 'transparent',
                }}
              ></div>
            </button>
          )
        })}
      </div>
      <div className="flex flex-col gap-[6px]">
        <span className="block text-gray-900 leading-[16px]">{brand?.value}</span>
        <span className="block font-medium text-[16px] leading-[18px] text-[rgba(10,72,116,1)]">
          {title}
        </span>
        <div className="flex gap-[8px]">
          {hasDiscount && (
            <span className="line-through leading-[16px]">
              {`${priceSymbol}${getParsedPrice(selectedVariant?.compareAtPrice?.amount ?? '0')}`}
            </span>
          )}
          <span className="text-red-600 leading-[16px]">
            {`${priceSymbol}${getParsedPrice(selectedVariant?.price?.amount ?? '0')}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
