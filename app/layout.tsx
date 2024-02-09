import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { draftMode } from 'next/headers'
import { PreviewBridge } from '@gocontento/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Salamander',
  description: 'Demo project for Contento, built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient bg-orange`}>
        <PreviewBridge draftMode={draftMode().isEnabled} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
