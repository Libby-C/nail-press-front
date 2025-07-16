import { gql } from '@apollo/client';


export const GET_LISTING = gql`
  query GetListing($listingId: Int!) {
    listing(id: $listingId) {
      id
      title
    }
  }
`;

// would use this in react like this:
// const { data } = useQuery(GET_LISTING, {
//   variables: { listingId: 123 }, // Dynamic value
// });

export const GET_LISTINGS = gql`
  query GetListings {
    listings {
      id
      title
    }
  }
`;