import { ButtonProps } from '@/types/components'
import React from 'react'

export default function Button({title, disabled, small, icon, onClick, outline}: ButtonProps) {
  return (
    <button>{title}</button>
  )
}
