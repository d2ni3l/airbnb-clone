import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservation";

interface IParams {
  listingsId?: string;
}

export default async function page({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  

  console.log(listing)
  return (
    <div>
      <ListingClient
        currentUser={currentUser}
        listing={listing}
        reservations={reservations}
      />
    </div>
  );
}
