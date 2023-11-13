'use client'

import useCountries from '@/app/hooks/useCountries';
import { ListingHeadProps } from '@/types/components'
import React from 'react'
import Heading from '../Heading';
import Image from 'next/image';
import HeartButton from '../HeartButton';

export default function ListingHead({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser
  }: ListingHeadProps) {

    const { getByValue } = useCountries();

  const location = getByValue(locationValue);
  return (
    <>
    <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
  )
}
