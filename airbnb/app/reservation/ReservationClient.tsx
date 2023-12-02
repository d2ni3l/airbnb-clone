"use client";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { safeReservation, safeUser } from "@/types/components";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

import React from "react";

interface ReservationsClientProps {
  reservations: safeReservation[];
  currentUser?: safeUser | null;
}
export default function ReservationClient({
  reservations,
  currentUser,
}: ReservationsClientProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios
      .delete(`/api/reservations${id}`)
      .then(() => {
        toast.success("Reservation cancelled");
      })
      .catch((err) => {
        toast.error(err || "Something went wrong");
      })
      .finally(() => {
        setDeletingId("");
      });
    router.refresh();
  }, []);
  return (
    <div>
      <Container>
        <Heading title='Reservations' subtitle='Bookings on your properties' />

        <div
          className=' mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8'>
            {reservations.map((reservation) => {
                return(
            <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />  
                )
            })}
          </div>
      </Container>
    </div>
  );
}
