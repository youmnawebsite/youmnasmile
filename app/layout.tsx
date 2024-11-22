import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'رجعي الضحكة يا يمنى',
  description: 'موقع خاص ليمنى',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} bg-gradient-to-br from-yellow-300 to-orange-400 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}

