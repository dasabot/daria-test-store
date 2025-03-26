import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {COLLECTION_QUERY} from '~/graphql/collection';
import Collection from '~/sections/Collection';

export async function loader({
  params: {handle},
  context: {storefront},
}: LoaderFunctionArgs) {
  const {country, language} = storefront.i18n;
  const queryParams = {
    variables: {country, language, handle: handle || ''},
  };

  const {collection} = await storefront.query(COLLECTION_QUERY, queryParams);

  if (!collection) {
    throw new Response('Collection not found', {status: 404});
  }

  return {collection};
}

const CollectionPage = () => {
  const {collection} = useLoaderData<typeof loader>();

  return <Collection {...collection}></Collection>
};

export default CollectionPage;
