import { IconType } from "react-icons/lib";
import React from 'react'

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