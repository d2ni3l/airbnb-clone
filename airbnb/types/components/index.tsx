import { IconType } from "react-icons/lib";
import React from 'react'
import {Range, RangeKeyDict} from 'react-date-range'
import { Listing, Reservation, User } from "@prisma/client";

export interface ContainerProps {
    children : React.ReactNode
}

export interface MenuItemsProps{
    onClick: () => void;
    label: string;

}

export interface Modal{
    isOpen? : boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean
    secondaryAction?: () => void,
    secondaryLabel?: string
}


export interface ButtonProps{
    title: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    Icon?: IconType

}

export interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
  }

export interface NavbarProps{
    currentUser?: safeUser | null
}

export interface UserMenuProps{
    currentUser?: safeUser | null
}

 export type safeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> &{
    createdAt: string
    updatedAt: string
    emailVerified: string | null
}

export interface AvatarProps {
    src? : string | undefined | null

}

export interface CategoryBoxProps{
    label: string
    description: string
    icon: IconType
    selected?: boolean 
}

export interface CategoryInputProps{
    selected?: boolean
    label: string
    icon: IconType
    onClick: (value : string) => void
}

export interface MapsProps{
    center?: number[]

}

 export interface CounterProps{
    title: string
    subtitle: string
    value: number
    onChange : (value : number) => void
 }


 export interface ImageUploadProps{
    onChange: (value: string) => void
    value: string

 }

 export interface EmptyStateProps{
    title?: string
    subtitle?: string
    showReset?: boolean
 }

 export interface ListingCardProps{
    data: safeListing
    currentUser?: safeUser | null
    reservation?: safeReservation
    disabled?: boolean
    actionId?: string
    actionLabel?: string
    onAction?: (id: string) => void
 }


 export interface HeartButtonProps{
    currentUser?: safeUser | null
    listingId: string 
 }

 export interface IParams{
    listingId?: string
 }

 export interface IUseFavoriteProps{
    listingId: string
    currentUser?: safeUser | null
}

export type safeListing = Omit<
Listing,
'createdAt'
> &{
    createdAt: string;
}

export interface GetListingByIdProps{
 listingid?: string
}

export interface ListingClientProps{
   

reservations?: safeReservation[];
listing: safeListing& {
  user: safeUser;
} 
currentUser?: safeUser | null;
}


export type safeReservation= Omit<
Reservation,
'createdAt' | 'startDate' | 'emailVerified' | 'listing'
> & {
    createdAt: string
    startDate: string
    endDate: string
    listing: safeListing
}

export interface ListingHeadProps{
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: safeUser | null
  
}

export interface ListingInfoProps{
    user: safeUser,
    description: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    category: {
      icon: IconType,
      label: string;
      description: string;
    } | undefined
    locationValue: string;
}


export interface ListingCategoryProps{
    icon: IconType
    label: string
    description: string

}

export interface ListingReservationProps{
    price: number;
    dateRange: Range,
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates: Date[];
}

export interface CalendarProps{
    value: Range
    onChange: (value: RangeKeyDict) => void
    disabledDates?:Date[]

}

export interface TripsClientProps{
    reservations: safeReservation[];
    currentUser?: safeUser | null,
}


