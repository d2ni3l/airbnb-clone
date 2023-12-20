import React from "react";
import { safeListing } from "@/types/components";
import { safeUser } from "@/types/components";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

interface FavoriteClientProps {
  listings: safeListing[];
  currentUser?: safeUser;
}
export default function FavoriteClient({
  listings,
  currentUser,
}: FavoriteClientProps) {
  return (
    <Container>
      <Heading title='Favorites' subtitle='List of places you favorited!' />
      <div
        className='
         mt-10
         grid 
         grid-cols-1 
         sm:grid-cols-2 
         md:grid-cols-3 
         lg:grid-cols-4
         xl:grid-cols-5
         2xl:grid-cols-6
         gap-8'>

{listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
         </div>
    </Container>
  );
}
