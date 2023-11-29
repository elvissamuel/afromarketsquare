import { Inter, Lato } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'AfroMarkets',
  description: "Africa's No 1 online marketplace",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${lato.className}`}>
          {/* <Nav /> */}
        {children}
      </body>
    </html>
  )
}
