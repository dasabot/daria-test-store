import ProductCard from '~/components/ProductCard';
import {CollectionProps} from './types';

const Collection = ({title, products}: CollectionProps) => (
  <section>
    <h2>{title}</h2>
    {products.nodes.map((product) => (
      <ProductCard key={product.id} product={product}></ProductCard>
    ))}
  </section>
);

export default Collection;
