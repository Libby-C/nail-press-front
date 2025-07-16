'use client';

import { useQuery} from '@apollo/client';
import { GET_LISTINGS } from './graphql/queries';


export default function Home() {
  const { loading, error, data } = useQuery(GET_LISTINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Listings</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}