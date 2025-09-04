// Example of using a button component for heckout in case I need mutations to take place before navigation 

// 'use client';
// import { useRouter } from 'next/navigation';
// import { useMutation } from '@apollo/client'; 
// import { YOUR_GRAPHQL_MUTATION } from '../graphql/mutations'; 
// import { Button } from "antd";

// export default function CheckoutButton() {
//   const router = useRouter();
//   const [trackButtonClick] = useMutation(YOUR_GRAPHQL_MUTATION);

//   const handleClick = async () => {
//     await trackButtonClick(); // Call GraphQL backend (ASP.NET Core)
//     router.push('/listings'); // Navigate after mutation
//   };

//   return (
//     <Button onClick={handleClick} type="primary">
//       Go to Listings
//     </Button>
//   );
// }





// It would then be used liek this in a page:

// import ClientButton from '@/components/ClientButton';

// export default function Home() {
//   return (
//     <div>
//       <h1>Static Homepage</h1>
//       <ClientButton /> {/* Interactive part isolated */}
//     </div>
//   );
// }