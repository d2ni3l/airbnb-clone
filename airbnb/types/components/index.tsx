import { IconType } from "react-icons/lib";


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
    onClick: (e: React.MouseEventHandler<HTMLButtonElement>) => void,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    icon?: IconType

}