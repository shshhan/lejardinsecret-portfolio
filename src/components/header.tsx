"use client"

import { motion } from "framer-motion"
import { useMenu } from "@/context/menu-context"
import Link from "next/link"
import { useResponsive } from "@/hooks/use-responsive"

export default function Header() {
  const { isMenuOpen, toggleMenu } = useMenu()
  const { isBelow } = useResponsive()

  // 반응형 글씨 크기 및 패딩 조정
  const getTitleSize = () => {
    if (isBelow('sm')) return 'text-xl';
    if (isBelow('md')) return 'text-2xl';
    return 'text-3xl';
  }

  const getHeaderPadding = () => {
    if (isBelow('sm')) return 'px-4 py-3';
    if (isBelow('md')) return 'px-5 py-4';
    return 'px-6 py-5';
  }

  const getButtonSize = () => {
    if (isBelow('sm')) return 'text-sm px-3.5 py-2';
    if (isBelow('md')) return 'text-base px-4 py-2';
    return 'text-base px-5 py-2.5';
  }

  const getIconSize = () => {
    if (isBelow('sm')) return 24;
    if (isBelow('md')) return 26;
    return 28;
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
          className="text-black flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </motion.a>

        {/* Hamburger Menu */}
        <motion.button
          className={`${isBelow('sm') ? 'w-8 h-8' : 'w-9 h-9'} flex flex-col justify-center items-center gap-1.5 z-50`}
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <motion.span
            className={`${isBelow('sm') ? 'w-6' : 'w-7'} h-0.5 bg-black block`}
            animate={isMenuOpen ? { rotate: 45, y: isBelow('sm') ? 6 : 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={`${isBelow('sm') ? 'w-6' : 'w-7'} h-0.5 bg-black block`}
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={`${isBelow('sm') ? 'w-6' : 'w-7'} h-0.5 bg-black block`}
            animate={isMenuOpen ? { rotate: -45, y: isBelow('sm') ? -6 : -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </header>
  )
}
