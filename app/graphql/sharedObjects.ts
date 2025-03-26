export const MONEY_FRAGMENT = `graphql
fragment Money on MoneyV2 {
    amount
    currencyCode
  }
` as const;

export const MEDIA_IMAGE_FRAGMENT = `#graphql
  fragment MediaImage on MediaImage {
    __typename
    id
    image {
      altText
      height
      url
      width
    }
  }
` as const

export const COLOR_FRAGMENT = `#graphql
fragment Color on Metaobject {
id
label: field(key: "label") {
  value
}
color: field(key: "color") {
  value
}
  }
` as const;
