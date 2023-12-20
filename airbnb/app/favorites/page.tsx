import EmptyState from '../components/EmptyState'
import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteListings from '../actions/getFavoriteListings'

import React from 'react'
import FavoriteClient from './FavoriteClient'

export default async function page() {

    const listings = await getFavoriteListings()
    const currentUser = await getCurrentUser()

    
  if (!currentUser) {
    return (
      
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      
    );
  }

    if(listings.length === 0){
        return (
            <EmptyState title='no favorites' subtitle='Looks like you have no favorite listings.'/>
          )
    }

    return(
        <FavoriteClient
        listings={listings}
        currentUser={currentUser}
        />
    )
  
}
