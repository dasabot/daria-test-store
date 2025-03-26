import {MEDIA_IMAGE_FRAGMENT} from './sharedObjects';

export const PRODUCT_VARIANT_FRAGMENT = `#graphql
fragment ProductVariant on ProductVariant {
  id
  title
  price {
    currencyCode
    amount
  }
  compareAtPrice {
    currencyCode
    amount
  }
  mainImage: metafield(namespace: "custom", key: "main_image") {
    reference {
      ... MediaImage
    }
  }
  hoverImage: metafield(namespace: "custom", key: "hover_image") {
    reference {
      ... MediaImage
    }
  }
  colorHex: metafield(namespace: "custom", key: "color_hex") {
    value
  }
  selectedOptions {
    name
    value
  }
}
${MEDIA_IMAGE_FRAGMENT}
` as const;

export const PRODUCT_CARD_FRAGMENT = `#graphql
fragment ProductCard on Product {
  id
  title
  handle
  images (first: 10) {
      nodes  {
        altText
        height
        url
        width
      }
  }
  variants(first: 20) {
    nodes {
      ...ProductVariant
    }
  }
  options {
    id
    optionValues {
      id
      name
    firstSelectableVariant {
      ...ProductVariant
    }
  }
  }
  brand:metafield(namespace:"custom",key:"brand") {
    value
  }
}
${PRODUCT_VARIANT_FRAGMENT}
` as const;

export const COLLECTION_FRAGMENT = `#graphql
fragment Collection on Collection {
  id
  handle
  title
  products(first: 250) {
    nodes {
      ...ProductCard
    }
  }
}
${PRODUCT_CARD_FRAGMENT}
` as const;

export const COLLECTION_QUERY = `#graphql
query Collection(
    $handle: String!,
    $country: CountryCode,
    $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      ...Collection
    }
  }
  ${COLLECTION_FRAGMENT}
` as const;
