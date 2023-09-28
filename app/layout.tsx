import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Salamander',
    description: 'Demo project for Contento, built with Next.js',
    themeColor: '#ffffff',
}

//                             <link rel="manifest" href="/site.webmanifest">

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-orange bg-gradient`}>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}
