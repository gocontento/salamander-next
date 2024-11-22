import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { draftMode } from 'next/headers'
import { PreviewBridge } from '@gocontento/next'
import AnnouncementBar from './components/blocks/AnnouncementBar'
import { createClient } from '@/lib/contento'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Salamander',
  description: 'Demo project for Contento, built with Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const announcementBar = await createClient().getContentByType({
    contentType: 'announcement_bar',
  })

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient bg-orange`}>
        <PreviewBridge draftMode={draftMode().isEnabled} />
        {announcementBar && (
          <AnnouncementBar block={announcementBar.content[0]} />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
