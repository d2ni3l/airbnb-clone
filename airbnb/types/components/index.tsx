import { IconType } from "react-icons/lib";
import React, { ReactChild } from 'react'
import { User } from "@prisma/client";

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

 type safeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> &{
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
    showReset: boolean
 }