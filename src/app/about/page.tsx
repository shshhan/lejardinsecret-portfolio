"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useMenu } from "@/context/menu-context"
import Image from "next/image"

export default function AboutPage() {
  const { setIsMenuOpen } = useMenu()

  // Reset menu state when navigating to this page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl font-light mb-16 text-center tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            ABOUT
          </motion.h1>

          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-light mb-6 border-b pb-3">Le Jardin Secret</h2>

            <div className="space-y-4 text-gray-800">
              <p className="text-lg">
                비밀의화원은 <span className="font-medium">순간</span>에 주목합니다.
              </p>

              <p>
                메인 작가님의 연출 컷뿐 아니라, 찰나의 자연스러운 웃음, 잠깐의 다정한 모먼트 등 메인 작가님이 담지 않는 자연스러운 순간까지 담고자 합니다.
              </p>

              <p>
                이런 모든 순간을 온전히 담아내기 위해서는 무엇보다 작가의 역량이 중요하다고 생각하기에 비밀의화원은 다음과 같은 원칙으로 운영 중입니다.
              </p>

              <div className="pl-4 border-l-2 border-gray-200 mt-6 space-y-3">
                <p>
                  <span className="font-medium">0.</span> 비밀의화원은 사업자등록이 완료된 정식 스냅 업체입니다.
                </p>
                <p>
                  <span className="font-medium">1.</span> 비밀의화원의 모든 작가는 기본적으로 DSLR 을 최소 7년 이상 다룬 작가들로 구성되어 있습니다.
                </p>
                <p className="mb-0">
                  <span className="font-medium">2.</span> 비밀의화원의 모든 작가는 비밀의화원이 추구하는 사진에 대해 깊은 이해도를 가지고 있습니다.
                </p>
                <p className="pl-4">
                  24년 11월 현재 명시된 작가인 대표 작가, 벨 작가, 해 작가(남자작가) 3명 외 일일 아르바이트 혹은 짧은 교육만을 거친 다른 인력이 촬영하지 않습니다.
                </p>
                <p>
                  <span className="font-medium">3.</span> 비밀의화원은 실장 작가님들은 고유의 이름으로 불리며, 모든 분의 예약 상담 단계에서부터 촬영 작가를 명시하여 예약이 진행됩니다.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-light mb-8 text-center tracking-wide">Photographers</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 대표작가 */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-medium mb-3 border-b pb-2">대표작가</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">iPhone 16pro</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">iPhone 14pro</span>
                </div>
              </motion.div>

              {/* 벨작가 */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-medium mb-3 border-b pb-2">벨작가</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">iPhone 16pro</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">iPhone 13pro</span>
                </div>
              </motion.div>

              {/* 해작가 */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-medium mb-3 border-b pb-2">해작가</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">iPhone 16pro</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
