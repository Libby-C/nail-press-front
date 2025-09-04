'use client';
import React from 'react';
import { useQuery} from '@apollo/client';
import { GET_LISTINGS } from '../graphql/queries';


export default function ListingsPage() {

  const { loading, error, data } = useQuery(GET_LISTINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Listings Page</h1>
      <p>This is the listings page.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}