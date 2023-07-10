'use client'

import { ContainerProps } from '@/types/components'
import React from 'react'

const Container  = ({
    children
}: ContainerProps) => {
  return (
    <div className='mx-w-[2500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>{
        children
    }</div>
  )
}

export default Container