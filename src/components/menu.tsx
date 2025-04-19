"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useResponsive } from "@/hooks/use-responsive"

const menuItems = [
  { name: "ABOUT", href: "/about", color: "text-green-600" },
  { name: "GALLERY", href: "/gallery", color: "text-green-700" },
  { name: "PACKAGES", href: "/packages", color: "text-green-800" },
  { name: "BENEFITS", href: "/benefits", color: "text-green-900" },
]

export default function Menu() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { isBelow, width } = useResponsive()

  // 디버깅을 위한 콘솔 로그 추가
  console.log('Menu component rendered, window width:', width)

  // 반응형 글씨 크기, 간격 및 너비 조정
  const getMenuTextSize = () => {
    const size = isBelow('sm') ? 'text-xl' : isBelow('md') ? 'text-2xl' : 'text-3xl';
    console.log('Menu text size:', size, 'for width:', width);
    return size;
  }

  const getMenuGap = () => {
    if (isBelow('sm')) return 'gap-4';
    if (isBelow('md')) return 'gap-5';
    return 'gap-6';
  }

  return (
    <nav className={`flex flex-col items-center justify-center ${getMenuGap()} pointer-events-auto`}>
      {menuItems.map((item, index) => (
        <motion.div
          key={item.name}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          onHoverStart={() => setHoveredItem(item.name)}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <Link
            href={item.href}
            className={`${getMenuTextSize()} font-light tracking-wider ${item.color} transition-all duration-300 hover:opacity-80`}
          >
            {item.name}
          </Link>
          <motion.div
            className="h-px bg-black w-0"
            animate={{
              width: hoveredItem === item.name ? "100%" : "0%",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </nav>
  )
}
