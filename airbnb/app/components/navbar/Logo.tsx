"use client"

import Image from 'next/image'
import {useRouter} from 'next/navigation'


import React from 'react'

export default function Logo() {
  const  router = useRouter()
  return (
    <div>
        
        <Image
        onClick={() => {router.push('/')}}
        src='/images/logo.png'
        alt='logo'
        height={100}
        width={100}

        className='hidden md:block cursor-pointer'
        />
    </div>
  )
}
