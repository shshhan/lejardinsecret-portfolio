"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useMenu } from "@/context/menu-context"

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
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-light mb-16 text-center">ABOUT</h1>

          <div className="mb-12">
            <h2 className="text-xl font-light mb-4">Le Jardin Secret</h2>
            <p className="mb-2">
              비밀의화원은 ‘순간’에 주목합니다.
            </p>
            <p className="mb-1">
              메인 작가님의 연출 컷뿐 아니라,
              찰나의 자연스러운 웃음, 잠깐의 다정한 모먼트 등
              메인작가님이 담지 않는 자연스러운 순간까지 담고자 합니다.
            </p>
            <p className="mb-2">
              이런 모든 순간을 온전히 담아내기 위해서는
              무엇보다 작가의 역량이 중요하다고 생각하기에
              비밀의화원은 다음과 같은 원칙으로 운영 중입니다.
            </p>
            <p className="mb-1">
              0. 비밀의화원은 사업자등록이 완료된 정식 스냅 업체입니다.
            </p>
            <p className="mb-1">
              1. 비밀의화원의 모든 작가는 기본적으로 DSLR 을 최소 7년 이상 다룬 작가들로 구성되어 있습니다.
            </p>
            <p className="mb-1">
              2. 비밀의화원의 모든 작가는 비밀의화원이 추구하는 사진에 대해 깊은 이해도를 가지고 있습니다.
              24년 11월 현재 명시된 작가인 대표 작가, 벨 작가, 해 작가(남자작가) 3명 외 일일 아르바이트 혹은 짧은 교육만을 거친 다른 인력이 촬영하지 않습니다.
            </p>
            <p className="mb-4">
              3. 비밀의화원은 실장 작가님들은 고유의 이름으로 불리며, 모든 분의 예약 상담 단계에서부터 촬영 작가를 명시하여 예약이 진행됩니다.
            </p>
          </div>

          {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">*/}
          {/*  <div>*/}
          {/*    <Image*/}
          {/*      src="/placeholder.svg?height=400&width=400"*/}
          {/*      alt="Studio"*/}
          {/*      width={400}*/}
          {/*      height={400}*/}
          {/*      className="w-full h-auto object-cover mb-4"*/}
          {/*    />*/}
          {/*    <h3 className="text-lg font-medium mb-2">Our Studio</h3>*/}
          {/*    <p className="text-sm">*/}
          {/*      Located in the heart of the city, our studio is equipped with state-of-the-art equipment and designed to*/}
          {/*      inspire creativity.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <Image*/}
          {/*      src="/placeholder.svg?height=400&width=400"*/}
          {/*      alt="Our Process"*/}
          {/*      width={400}*/}
          {/*      height={400}*/}
          {/*      className="w-full h-auto object-cover mb-4"*/}
          {/*    />*/}
          {/*    <h3 className="text-lg font-medium mb-2">Our Process</h3>*/}
          {/*    <p className="text-sm">*/}
          {/*      We believe in a collaborative approach, working closely with our clients to understand their vision and*/}
          {/*      bring it to life.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className="mb-12">
            <h2 className="text-xl font-light mb-6">Photographers</h2>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/*<Image*/}
                {/*  src="/placeholder.svg?height=300&width=300"*/}
                {/*  alt="Artist 1"*/}
                {/*  width={200}*/}
                {/*  height={200}*/}
                {/*  className="rounded-full object-cover"*/}
                {/*/>*/}
                <div>
                  <h3 className="text-lg font-medium mb-2">대표작가</h3>
                  {/*<p className="text-sm text-gray-700 mb-4">한줄 소개 예정</p>*/}
                  <p>
                    iPhone 16pro & 14pro
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/*<Image*/}
                {/*  src="/placeholder.svg?height=300&width=300"*/}
                {/*  alt="Artist 2"*/}
                {/*  width={200}*/}
                {/*  height={200}*/}
                {/*  className="rounded-full object-cover"*/}
                {/*/>*/}
                <div>
                  <h3 className="text-lg font-medium mb-2">벨작가</h3>
                  {/*<p className="text-sm text-gray-700 mb-4">한줄 소개 예정</p>*/}
                  <p>
                    iPhone 16pro & 13pro
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/*<Image*/}
                {/*  src="/placeholder.svg?height=300&width=300"*/}
                {/*  alt="Artist 2"*/}
                {/*  width={200}*/}
                {/*  height={200}*/}
                {/*  className="rounded-full object-cover"*/}
                {/*/>*/}
                <div>
                  <h3 className="text-lg font-medium mb-2">해작가</h3>
                  {/*<p className="text-sm text-gray-700 mb-4">한줄 소개 예정</p>*/}
                  <p>
                    iPhone 16pro
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  )
}
