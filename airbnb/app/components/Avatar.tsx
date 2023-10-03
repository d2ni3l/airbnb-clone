"use client"

import { AvatarProps } from '@/types/components'
import Image from 'next/image'
import React from 'react'

export default function Avatar({src}: AvatarProps) {
  return (
    <div>
        <Image
        className='rounded-full'
        height={30}
        width={30}
        src={src || '/images/placeholder.jpg' }
        alt='avatar'
        />


    </div>
  )
}
