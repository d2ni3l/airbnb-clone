"use client"

import { MenuItemsProps } from '@/types/components'
import React from 'react'

export default function MenuItem({onClick, label}: MenuItemsProps) {
  return (
    <div onClick={onClick} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
            {label}
    </div>
  )
}
