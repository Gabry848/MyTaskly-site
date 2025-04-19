import "./globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "./contexts/LanguageContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollReset from "./components/ScrollReset"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mytaskly - Minimal Todo List App",
  description: "Organize your life with the elegant and minimal Mytaskly todo app",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <LanguageProvider>
          <ScrollReset />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
