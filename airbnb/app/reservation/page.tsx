import React from 'react'
import EmptyState from "@/app/components/EmptyState";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from '@/app/actions/getReservation';

import TripsClient from '@/app/trips/TripsClient'

export default async function page() {

    const currentUser = await getCurrentUser()

    if(!currentUser){
        return(
            <EmptyState title='unathorized' subtitle='Please login'/>
        )
    }

    const reservation = await getReservations({
        authorId: currentUser.id
    })
 
    if(reservation.length === 0){
        return (
            <EmptyState title='No reservation found'  subtitle='it looks like you have no reservation on your properties'/>
        )
    }
  return (
    // <ReservationClient 
    
    // />

    <div></div>
  )
}
