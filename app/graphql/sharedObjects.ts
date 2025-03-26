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
