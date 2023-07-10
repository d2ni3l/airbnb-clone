"use client"

import Image from 'next/image'
import React from 'react'

export default function Avatar() {
  return (
    <div>
        <Image
        className='rounded-full'
        height={30}
        width={30}
        src='/images/placeholder.jpg'
        alt='avatar'
        />


    </div>
  )
}
