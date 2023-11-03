import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Taskify',
  description: 'Keep track of your tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
    {children}
    </body>
    </html>
    </ClerkProvider>
  )
}
