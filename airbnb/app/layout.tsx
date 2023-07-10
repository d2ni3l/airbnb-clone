import './globals.css'
import type { Metadata } from 'next'
import { poppins } from './fonts'



export const metadata: Metadata = {
  title: 'Air bnb',
  description: 'Air bnb Clone',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
