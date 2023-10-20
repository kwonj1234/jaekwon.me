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
      <body className={`${inter.className} min-h-screen flex flex-col relative`}>
        <NavBar></NavBar>
        <main className='body flex-1'>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
