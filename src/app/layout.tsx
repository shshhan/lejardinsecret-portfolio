import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"
import { MenuProvider } from "@/context/menu-context"
import Header from "@/components/header"
import FullScreenMenu from "@/components/full-screen-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "비밀의 화원",
  description: "아이폰 스냅 비밀의 화원",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden cursor-none`}>
        <MenuProvider>
          <CustomCursor />
          <Header />
          <FullScreenMenu />
          {children}
        </MenuProvider>
      </body>
    </html>
  )
}
