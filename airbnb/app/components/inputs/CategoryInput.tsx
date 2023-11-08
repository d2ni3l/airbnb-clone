'use client'
import { CategoryInputProps } from '@/types/components'
import React from 'react'

export default function CategoryInput({icon : Icon, selected, onClick, label }: CategoryInputProps) {
  return (
    <div>
       <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
      `}
    >
      <Icon size={30} />
      <div className="font-semibold">
        {label}
      </div>
    </div>
    </div>
  )
}
