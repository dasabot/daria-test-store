import {
  MediaImageFragment,
  ProductCardFragment,
  ProductVariantFragment,
} from 'storefrontapi.generated';

export type ProductCardProps = {
  product: ProductCardFragment;
  className?: string;
};
