import { Poppins } from 'next/font/google'
import {Nunito} from 'next/font/google'
export const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  
  })

  export const inter = Nunito({
    subsets: ['latin']
  })