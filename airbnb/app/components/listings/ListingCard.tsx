'use client'

import useCountries from "@/app/hooks/useCountries";
import { ListingCardProps } from "@/types/components";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import {useMemo} from 'react'
import {format} from 'date-fns'
import Image from "next/image";
import Button from "../Button";
import HeartButton from "../HeartButton";
export default function ListingCard({
  data,
  currentUser,
  reservation,
  disabled,
  actionId = '',
  actionLabel,
  onAction,
}: ListingCardProps) {

    const router = useRouter()
    const {getByValue} =  useCountries()
    const location = getByValue(data.locationValue)

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    
        if (disabled) {
          return;
        }
    
        onAction?.(actionId)
      }, [disabled, onAction, actionId]);

      const price = useMemo(() => {
        if (reservation) {
          return reservation.totalPrice;
        }
    
        return data.price;
      }, [reservation, data.price]);
    
      const reservationDate = useMemo(() => {
        if (!reservation) {
          return null;
        }
      
        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);
    
        return `${format(start, 'PP')} - ${format(end, 'PP')}`;
      }, [reservation]);
    

  return(
    <div 
  onClick={() => router.push(`/listings/${data.id}`)} 
  className="col-span-1 cursor-pointer group"
>
  <div className="flex flex-col gap-2 w-full">
    <div 
      className="
        aspect-square 
        w-full 
        relative 
        overflow-hidden 
        rounded-xl
      "
    >
      <Image
        fill
        className="
          object-cover 
          h-full 
          w-full 
          group-hover:scale-110 
          transition
        "
        src={data.imageSrc}
        alt="Listing"
      />
      <div className="
        absolute
        top-3
        right-3
      ">
        <HeartButton
          listingId={data.id} 
          currentUser={currentUser}
        />
      </div>
    </div>
    <div className="font-semibold text-lg">
      {location?.region}, {location?.label}
    </div>
    <div className="font-light text-neutral-500">
      {reservationDate || data.category}
    </div>
    <div className="flex flex-row items-center gap-1">
      <div className="font-semibold">
        $ {price}
      </div>
      {!reservation && (
        <div className="font-light">night</div>
      )}
    </div>
    {onAction && actionLabel && (
      <Button
        disabled={disabled}
        small
        title={actionLabel} 
        onClick={handleCancel}
      />
    )}
  </div>
</div>
  )
  
}
