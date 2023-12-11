'use client'
import {ClimbingBoxLoader
} from 'react-spinners'
import React from 'react'

export default function Loader() {
  return (
    <div
    className='h-[70vh flex flex-col justify-center items-center'>
        <ClimbingBoxLoader

        size={100}
        color='red'
        />

    </div>
  )
}
