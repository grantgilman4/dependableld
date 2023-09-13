import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation/page'
import Footer from './components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dependable Layout & Design',
  description: 'Providing a professional image for your business growth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
