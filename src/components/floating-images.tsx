'use client'

import {Fragment, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fetchAllVenueImages } from '@/lib/venues-client'

// 로딩 전 기본 플레이스홀더
const defaultImages = [
  "/placeholder.svg?height=400&width=300",
  "/placeholder.svg?height=350&width=250",
  "/placeholder.svg?height=450&width=320",
  "/placeholder.svg?height=380&width=280",
  "/placeholder.svg?height=420&width=300",
]

export default function FloatingLanes() {
  const [images, setImages] = useState<string[]>([])
  const LANES = 3                // 차선 수 고정
  const DURATION = 12           // 한 번 떠오르는 데 걸리는 시간 (초)
  const IMG_WIDTH = 500
  const IMG_HEIGHT = 600

  // 이미지 불러오기
  useEffect(() => {
    fetchAllVenueImages()
      .then(imgs => setImages(imgs.length ? imgs : defaultImages))
      .catch(() => setImages(defaultImages))
  }, [])

  if (!images.length) return null

  // 1) 이미지를 3개의 차선으로 그룹화
  const laneGroups: string[][] = Array.from({ length: LANES }, () => [])
  images.forEach((src, idx) => {
    laneGroups[idx % LANES].push(src)
  })

  return (
    <div className="relative w-screen h-screen overflow-hidden pointer-events-none">
      {laneGroups.map((laneImages, laneIndex) => {
        // 2) 이 차선의 가로 위치 계산
        const laneWidth = window.innerWidth / LANES
        const x = laneIndex * laneWidth + (laneWidth - IMG_WIDTH) / 2

        // 3) 차선당 이미지 개수로 균등한 delay 간격 계산
        const interval = DURATION / laneImages.length + 5

        return (
          <Fragment key={laneIndex}>
            {laneImages.map((src, idxInLane) => (
              <motion.div
                key={`${laneIndex}-${idxInLane}`}
                className="absolute"
                style={{ left: x, width: IMG_WIDTH, height: IMG_HEIGHT }}
                initial={{ y: window.innerHeight }}            // 화면 아래에서 시작
                animate={{ y: -IMG_HEIGHT }}                    // 화면 위로 끝까지
                transition={{
                  delay: interval * idxInLane,                  // 이미지별 동일한 텀
                  duration: DURATION,                           // 동일 속도
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                <Image
                  src={src}
                  alt={`Floating ${laneIndex}-${idxInLane}`}
                  width={IMG_WIDTH}
                  height={IMG_HEIGHT}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </Fragment>
        )
      })}
    </div>
  )
}