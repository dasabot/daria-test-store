/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types'

export type ProductVariantFragment = Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
  price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
  compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
  mainImage?: StorefrontAPI.Maybe<{
    reference?: StorefrontAPI.Maybe<
      { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
          image?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
          >
        }
    >
  }>
  hoverImage?: StorefrontAPI.Maybe<{
    reference?: StorefrontAPI.Maybe<
      { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
          image?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
          >
        }
    >
  }>
  colorHex?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
  selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
}

export type ProductCardFragment = Pick<StorefrontAPI.Product, 'id' | 'title' | 'handle'> & {
  images: { nodes: Array<Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>> }
  variants: {
    nodes: Array<
      Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
        price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
        compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
        mainImage?: StorefrontAPI.Maybe<{
          reference?: StorefrontAPI.Maybe<
            { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                image?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                >
              }
          >
        }>
        hoverImage?: StorefrontAPI.Maybe<{
          reference?: StorefrontAPI.Maybe<
            { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                image?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                >
              }
          >
        }>
        colorHex?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
        selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
      }
    >
  }
  options: Array<
    Pick<StorefrontAPI.ProductOption, 'id'> & {
      optionValues: Array<
        Pick<StorefrontAPI.ProductOptionValue, 'id' | 'name'> & {
          firstSelectableVariant?: StorefrontAPI.Maybe<
            Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
              price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
              >
              mainImage?: StorefrontAPI.Maybe<{
                reference?: StorefrontAPI.Maybe<
                  { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                      image?: StorefrontAPI.Maybe<
                        Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                      >
                    }
                >
              }>
              hoverImage?: StorefrontAPI.Maybe<{
                reference?: StorefrontAPI.Maybe<
                  { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                      image?: StorefrontAPI.Maybe<
                        Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                      >
                    }
                >
              }>
              colorHex?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
              selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
            }
          >
        }
      >
    }
  >
  brand?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
}

export type CollectionFragment = Pick<StorefrontAPI.Collection, 'id' | 'handle' | 'title'> & {
  products: {
    nodes: Array<
      Pick<StorefrontAPI.Product, 'id' | 'title' | 'handle'> & {
        images: { nodes: Array<Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>> }
        variants: {
          nodes: Array<
            Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
              price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
              compareAtPrice?: StorefrontAPI.Maybe<
                Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
              >
              mainImage?: StorefrontAPI.Maybe<{
                reference?: StorefrontAPI.Maybe<
                  { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                      image?: StorefrontAPI.Maybe<
                        Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                      >
                    }
                >
              }>
              hoverImage?: StorefrontAPI.Maybe<{
                reference?: StorefrontAPI.Maybe<
                  { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                      image?: StorefrontAPI.Maybe<
                        Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                      >
                    }
                >
              }>
              colorHex?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
              selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
            }
          >
        }
        options: Array<
          Pick<StorefrontAPI.ProductOption, 'id'> & {
            optionValues: Array<
              Pick<StorefrontAPI.ProductOptionValue, 'id' | 'name'> & {
                firstSelectableVariant?: StorefrontAPI.Maybe<
                  Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
                    price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
                    compareAtPrice?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
                    >
                    mainImage?: StorefrontAPI.Maybe<{
                      reference?: StorefrontAPI.Maybe<
                        { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                            image?: StorefrontAPI.Maybe<
                              Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                            >
                          }
                      >
                    }>
                    hoverImage?: StorefrontAPI.Maybe<{
                      reference?: StorefrontAPI.Maybe<
                        { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                            image?: StorefrontAPI.Maybe<
                              Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                            >
                          }
                      >
                    }>
                    colorHex?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
                    selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
                  }
                >
              }
            >
          }
        >
        brand?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
      }
    >
  }
}

export type CollectionQueryVariables = StorefrontAPI.Exact<{
  handle: StorefrontAPI.Scalars['String']['input']
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
}>

export type CollectionQuery = {
  collection?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Collection, 'id' | 'handle' | 'title'> & {
      products: {
        nodes: Array<
          Pick<StorefrontAPI.Product, 'id' | 'title' | 'handle'> & {
            images: {
              nodes: Array<Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>>
            }
            variants: {
              nodes: Array<
                Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
                  price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
                  compareAtPrice?: StorefrontAPI.Maybe<
                    Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
                  >
                  mainImage?: StorefrontAPI.Maybe<{
                    reference?: StorefrontAPI.Maybe<
                      { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                          image?: StorefrontAPI.Maybe<
                            Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                          >
                        }
                    >
                  }>
                  hoverImage?: StorefrontAPI.Maybe<{
                    reference?: StorefrontAPI.Maybe<
                      { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                          image?: StorefrontAPI.Maybe<
                            Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                          >
                        }
                    >
                  }>
                  colorHex?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
                  selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
                }
              >
            }
            options: Array<
              Pick<StorefrontAPI.ProductOption, 'id'> & {
                optionValues: Array<
                  Pick<StorefrontAPI.ProductOptionValue, 'id' | 'name'> & {
                    firstSelectableVariant?: StorefrontAPI.Maybe<
                      Pick<StorefrontAPI.ProductVariant, 'id' | 'title'> & {
                        price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
                        compareAtPrice?: StorefrontAPI.Maybe<
                          Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
                        >
                        mainImage?: StorefrontAPI.Maybe<{
                          reference?: StorefrontAPI.Maybe<
                            { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                                image?: StorefrontAPI.Maybe<
                                  Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                                >
                              }
                          >
                        }>
                        hoverImage?: StorefrontAPI.Maybe<{
                          reference?: StorefrontAPI.Maybe<
                            { __typename: 'MediaImage' } & Pick<StorefrontAPI.MediaImage, 'id'> & {
                                image?: StorefrontAPI.Maybe<
                                  Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>
                                >
                              }
                          >
                        }>
                        colorHex?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
                        selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
                      }
                    >
                  }
                >
              }
            >
            brand?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Metafield, 'value'>>
          }
        >
      }
    }
  >
}

export type MediaImageFragment = { __typename: 'MediaImage' } & Pick<
  StorefrontAPI.MediaImage,
  'id'
> & {
    image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'altText' | 'height' | 'url' | 'width'>>
  }

export type MoneyFragment = Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>

export type CartLineFragment = Pick<StorefrontAPI.CartLine, 'id' | 'quantity'> & {
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
  cost: {
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >
  }
  merchandise: Pick<
    StorefrontAPI.ProductVariant,
    'id' | 'availableForSale' | 'requiresShipping' | 'title'
  > & {
    compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
    price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
    >
    product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>
    selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
  }
}

export type CartLineComponentFragment = Pick<
  StorefrontAPI.ComponentizableCartLine,
  'id' | 'quantity'
> & {
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
  cost: {
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    >
  }
  merchandise: Pick<
    StorefrontAPI.ProductVariant,
    'id' | 'availableForSale' | 'requiresShipping' | 'title'
  > & {
    compareAtPrice?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
    price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    image?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
    >
    product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>
    selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
  }
}

export type CartApiQueryFragment = Pick<
  StorefrontAPI.Cart,
  'updatedAt' | 'id' | 'checkoutUrl' | 'totalQuantity' | 'note'
> & {
  appliedGiftCards: Array<
    Pick<StorefrontAPI.AppliedGiftCard, 'lastCharacters'> & {
      amountUsed: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    }
  >
  buyerIdentity: Pick<StorefrontAPI.CartBuyerIdentity, 'countryCode' | 'email' | 'phone'> & {
    customer?: StorefrontAPI.Maybe<
      Pick<StorefrontAPI.Customer, 'id' | 'email' | 'firstName' | 'lastName' | 'displayName'>
    >
  }
  lines: {
    nodes: Array<
      | (Pick<StorefrontAPI.CartLine, 'id' | 'quantity'> & {
          attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
          cost: {
            totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >
          }
          merchandise: Pick<
            StorefrontAPI.ProductVariant,
            'id' | 'availableForSale' | 'requiresShipping' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >
            price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            image?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
            >
            product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>
            selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
          }
        })
      | (Pick<StorefrontAPI.ComponentizableCartLine, 'id' | 'quantity'> & {
          attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
          cost: {
            totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            amountPerQuantity: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            compareAtAmountPerQuantity?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >
          }
          merchandise: Pick<
            StorefrontAPI.ProductVariant,
            'id' | 'availableForSale' | 'requiresShipping' | 'title'
          > & {
            compareAtPrice?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            >
            price: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
            image?: StorefrontAPI.Maybe<
              Pick<StorefrontAPI.Image, 'id' | 'url' | 'altText' | 'width' | 'height'>
            >
            product: Pick<StorefrontAPI.Product, 'handle' | 'title' | 'id' | 'vendor'>
            selectedOptions: Array<Pick<StorefrontAPI.SelectedOption, 'name' | 'value'>>
          }
        })
    >
  }
  cost: {
    subtotalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    totalAmount: Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>
    totalDutyAmount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
    totalTaxAmount?: StorefrontAPI.Maybe<Pick<StorefrontAPI.MoneyV2, 'currencyCode' | 'amount'>>
  }
  attributes: Array<Pick<StorefrontAPI.Attribute, 'key' | 'value'>>
  discountCodes: Array<Pick<StorefrontAPI.CartDiscountCode, 'code' | 'applicable'>>
}

export type MenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
>

export type ChildMenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
>

export type ParentMenuItemFragment = Pick<
  StorefrontAPI.MenuItem,
  'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'
> & {
  items: Array<
    Pick<StorefrontAPI.MenuItem, 'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'>
  >
}

export type MenuFragment = Pick<StorefrontAPI.Menu, 'id'> & {
  items: Array<
    Pick<StorefrontAPI.MenuItem, 'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'> & {
      items: Array<
        Pick<StorefrontAPI.MenuItem, 'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'>
      >
    }
  >
}

export type ShopFragment = Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
  primaryDomain: Pick<StorefrontAPI.Domain, 'url'>
  brand?: StorefrontAPI.Maybe<{
    logo?: StorefrontAPI.Maybe<{ image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>> }>
  }>
}

export type HeaderQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  headerMenuHandle: StorefrontAPI.Scalars['String']['input']
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
}>

export type HeaderQuery = {
  shop: Pick<StorefrontAPI.Shop, 'id' | 'name' | 'description'> & {
    primaryDomain: Pick<StorefrontAPI.Domain, 'url'>
    brand?: StorefrontAPI.Maybe<{
      logo?: StorefrontAPI.Maybe<{ image?: StorefrontAPI.Maybe<Pick<StorefrontAPI.Image, 'url'>> }>
    }>
  }
  menu?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Menu, 'id'> & {
      items: Array<
        Pick<StorefrontAPI.MenuItem, 'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'> & {
          items: Array<
            Pick<StorefrontAPI.MenuItem, 'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'>
          >
        }
      >
    }
  >
}

export type FooterQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  footerMenuHandle: StorefrontAPI.Scalars['String']['input']
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
}>

export type FooterQuery = {
  menu?: StorefrontAPI.Maybe<
    Pick<StorefrontAPI.Menu, 'id'> & {
      items: Array<
        Pick<StorefrontAPI.MenuItem, 'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'> & {
          items: Array<
            Pick<StorefrontAPI.MenuItem, 'id' | 'resourceId' | 'tags' | 'title' | 'type' | 'url'>
          >
        }
      >
    }
  >
}

export type StoreRobotsQueryVariables = StorefrontAPI.Exact<{
  country?: StorefrontAPI.InputMaybe<StorefrontAPI.CountryCode>
  language?: StorefrontAPI.InputMaybe<StorefrontAPI.LanguageCode>
}>

export type StoreRobotsQuery = { shop: Pick<StorefrontAPI.Shop, 'id'> }

interface GeneratedQueryTypes {
  '#graphql\nquery Collection(\n    $handle: String!,\n    $country: CountryCode,\n    $language: LanguageCode)\n    @inContext(country: $country, language: $language) {\n    collection(handle: $handle) {\n      ...Collection\n    }\n  }\n  #graphql\nfragment Collection on Collection {\n  id\n  handle\n  title\n  products(first: 250) {\n    nodes {\n      ...ProductCard\n    }\n  }\n}\n#graphql\nfragment ProductCard on Product {\n  id\n  title\n  handle\n  images (first: 10) {\n      nodes  {\n        altText\n        height\n        url\n        width\n      }\n  }\n  variants(first: 20) {\n    nodes {\n      ...ProductVariant\n    }\n  }\n  options {\n    id\n    optionValues {\n      id\n      name\n    firstSelectableVariant {\n      ...ProductVariant\n    }\n  }\n  }\n  brand:metafield(namespace:"custom",key:"brand") {\n    value\n  }\n}\n#graphql\nfragment ProductVariant on ProductVariant {\n  id\n  title\n  price {\n    currencyCode\n    amount\n  }\n  compareAtPrice {\n    currencyCode\n    amount\n  }\n  mainImage: metafield(namespace: "custom", key: "main_image") {\n    reference {\n      ... MediaImage\n    }\n  }\n  hoverImage: metafield(namespace: "custom", key: "hover_image") {\n    reference {\n      ... MediaImage\n    }\n  }\n  colorHex: metafield(namespace: "custom", key: "color_hex") {\n    value\n  }\n  selectedOptions {\n    name\n    value\n  }\n}\n#graphql\n  fragment MediaImage on MediaImage {\n    __typename\n    id\n    image {\n      altText\n      height\n      url\n      width\n    }\n  }\n\n\n\n\n': {
    return: CollectionQuery
    variables: CollectionQueryVariables
  }
  '#graphql\n  fragment Shop on Shop {\n    id\n    name\n    description\n    primaryDomain {\n      url\n    }\n    brand {\n      logo {\n        image {\n          url\n        }\n      }\n    }\n  }\n  query Header(\n    $country: CountryCode\n    $headerMenuHandle: String!\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    shop {\n      ...Shop\n    }\n    menu(handle: $headerMenuHandle) {\n      ...Menu\n    }\n  }\n  #graphql\n  fragment MenuItem on MenuItem {\n    id\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  fragment ChildMenuItem on MenuItem {\n    ...MenuItem\n  }\n  fragment ParentMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      ...ChildMenuItem\n    }\n  }\n  fragment Menu on Menu {\n    id\n    items {\n      ...ParentMenuItem\n    }\n  }\n\n': {
    return: HeaderQuery
    variables: HeaderQueryVariables
  }
  '#graphql\n  query Footer(\n    $country: CountryCode\n    $footerMenuHandle: String!\n    $language: LanguageCode\n  ) @inContext(language: $language, country: $country) {\n    menu(handle: $footerMenuHandle) {\n      ...Menu\n    }\n  }\n  #graphql\n  fragment MenuItem on MenuItem {\n    id\n    resourceId\n    tags\n    title\n    type\n    url\n  }\n  fragment ChildMenuItem on MenuItem {\n    ...MenuItem\n  }\n  fragment ParentMenuItem on MenuItem {\n    ...MenuItem\n    items {\n      ...ChildMenuItem\n    }\n  }\n  fragment Menu on Menu {\n    id\n    items {\n      ...ParentMenuItem\n    }\n  }\n\n': {
    return: FooterQuery
    variables: FooterQueryVariables
  }
  '#graphql\n  query StoreRobots($country: CountryCode, $language: LanguageCode)\n   @inContext(country: $country, language: $language) {\n    shop {\n      id\n    }\n  }\n': {
    return: StoreRobotsQuery
    variables: StoreRobotsQueryVariables
  }
}

interface GeneratedMutationTypes {}

declare module '@shopify/hydrogen' {
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
