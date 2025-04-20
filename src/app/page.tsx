"use client"

import { useEffect } from "react"
import Menu from "@/components/menu"
import { useMenu } from "@/context/menu-context"

export default function Home() {
  const { setIsMenuOpen } = useMenu()

  // Reset menu state when navigating to home page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  return (
    <main className="min-h-screen relative bg-gray-50">
      {/* Floating background images - 비활성화됨 */}
      {/* <FloatingImages /> */}

      {/* Central Menu */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <Menu />
      </div>
    </main>
  )
}
