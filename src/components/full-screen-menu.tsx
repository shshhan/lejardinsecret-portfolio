"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useMenu } from "@/context/menu-context"
import Menu from "@/components/menu"
import { useEffect } from "react"

export default function FullScreenMenu() {
  const { isMenuOpen, setIsMenuOpen } = useMenu()

  // Close menu with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [setIsMenuOpen])

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white/90 backdrop-blur-sm z-40" // 반투명 배경 및 블러 효과 적용
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center h-full">
            <Menu />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
