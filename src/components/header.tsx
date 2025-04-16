"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { useMenu } from "@/context/menu-context"
import Link from "next/link"
import { useResponsive } from "@/hooks/use-responsive"

export default function Header() {
  const { isMenuOpen, toggleMenu } = useMenu()
  const { isBelow } = useResponsive()

  // 반응형 글씨 크기 및 패딩 조정
  const getTitleSize = () => {
    if (isBelow('sm')) return 'text-lg';
    if (isBelow('md')) return 'text-xl';
    return 'text-2xl';
  }

  const getHeaderPadding = () => {
    if (isBelow('sm')) return 'p-4';
    if (isBelow('md')) return 'p-5';
    return 'p-6';
  }

  const getButtonSize = () => {
    if (isBelow('sm')) return 'text-xs px-3 py-1.5';
    if (isBelow('md')) return 'text-sm px-3.5 py-1.5';
    return 'text-sm px-4 py-2';
  }

  const getIconSize = () => {
    if (isBelow('sm')) return 20;
    if (isBelow('md')) return 22;
    return 24;
  }

  return (
    <header className={`fixed top-0 w-full flex justify-between items-center ${getHeaderPadding()} z-50`}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/" className={`${getTitleSize()} font-light tracking-wider hover:opacity-80 transition-opacity`}>
          Le Jardin Secret
        </Link>
      </motion.div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Contact Us Button */}
        <motion.a
          href="https://pf.kakao.com/_Uykxoxj"
          target="_blank"
          rel="noopener noreferrer"
          className={`${getButtonSize()} border border-black font-medium rounded-md hover:bg-black hover:text-white transition-colors duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          문의하기
        </motion.a>

        {/* Instagram Icon */}
        <motion.a
          href="https://www.instagram.com/lejardinsecret__/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Instagram"
        >
          <Instagram size={getIconSize()} />
        </motion.a>

        {/* Hamburger Menu */}
        <motion.button
          className={`${isBelow('sm') ? 'w-7 h-7' : 'w-8 h-8'} flex flex-col justify-center items-center gap-1.5 z-50`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <motion.span
            className={`${isBelow('sm') ? 'w-5' : 'w-6'} h-0.5 bg-black block`}
            animate={isMenuOpen ? { rotate: 45, y: isBelow('sm') ? 5 : 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={`${isBelow('sm') ? 'w-5' : 'w-6'} h-0.5 bg-black block`}
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={`${isBelow('sm') ? 'w-5' : 'w-6'} h-0.5 bg-black block`}
            animate={isMenuOpen ? { rotate: -45, y: isBelow('sm') ? -5 : -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </header>
  )
}
