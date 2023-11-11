
'use client'
import { EmptyStateProps } from '@/types/components'
import { useRouter } from 'next/navigation'
import React from 'react'
import Heading from './Heading'
import Button from './Button'

export default function EmptyState({title = 'No exact matches', subtitle = 'Try changing or removing some of your filter', showReset} : EmptyStateProps) {

    const router = useRouter()
  return (
    <div className =''>  <div 
    className="
      h-[60vh]
      flex 
      flex-col 
      gap-2 
      justify-center 
      items-center 
    "
  >
    <Heading
      center
      title={title}
      subtitle={subtitle}
    />
    <div className="w-48 mt-4">
      {showReset && (
        <Button
          outline
          title="Remove all filters"
          onClick={() => router.push('/')}
        />
      )}
    </div>
  </div></div>
  )
}
