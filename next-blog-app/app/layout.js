import TheHeader from '@/components/TheHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import TheFooter from '@/components/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TheHeader></TheHeader>
        <main className='container'>
          {children}
        </main>
        <TheFooter></TheFooter>
      </body>
      
    </html>
  )
}