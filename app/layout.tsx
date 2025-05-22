import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BITA - Terminolohiya sa Pag-kakabod",
  description: "Aplikasyon na tutulong sa iyo na maintindihan ang mga terminolohiya sa pag-kakabod.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
