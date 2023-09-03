'use client'

import { ButtonProps } from '@/types/components'
import React from 'react'

export default function Button({title, disabled, small, Icon, onClick, outline}: ButtonProps) {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    w-full
    ${outline ? 'bg-white' : 'bg-rose-500'}
    ${outline ? 'border-black' : 'border-rose-500'}
    ${outline ? 'text-black' : 'text-white'}
    ${small ? 'text-sm' : 'text-md'}
    ${small ? 'py-1' : 'py-3'}
    ${small ? 'font-light' : 'font-semibold'}
    ${small ? 'border-[1px]' : 'border-2'}
  `}
    >
            {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}

      {title}</button>
  )
}
