

import getListingById from '@/app/actions/getListingById'
import React from 'react'

interface IParams {
  listingsId?: string;
}

export default async function page({params} : {params: IParams}) {
  const listing = await getListingById(
   params
  )

  return (
    <div>
        listing page
    </div>
  )
}
