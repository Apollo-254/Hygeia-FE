import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Welcome to Hygeia| Africa's Best Health Service Platform`,
  description: 'Hygeia is Africa’s leading health management company. We are building a healthier Africans through healthcare provision, health advisory, and health technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
