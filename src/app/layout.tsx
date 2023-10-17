import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jaehwi Kwon',
  description: 'Portfolio Website for Jaehwi Kwon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NavBar/>
        </div>
        <div className='body'>
          {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
