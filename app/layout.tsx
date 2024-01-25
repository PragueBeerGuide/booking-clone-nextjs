import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Booking.com Clone App',
  description: 'Book your dream stay today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#013B94]">
        <Header/>
        {children}
      </body>
    </html>
  )
}
