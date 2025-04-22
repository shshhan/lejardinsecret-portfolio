"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Check, Dot} from "lucide-react"
import { useMenu } from "@/context/menu-context"
import Image from "next/image"

export default function PackagesPage() {
  const { setIsMenuOpen } = useMenu()

  // Reset menu state when navigating to this page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  const packages = [
    {
      title: "패키지 A",
      headPrice: "₩400,000",
      bellPrice: "₩350,000",
      description: "대부분의 예식에 가장 최적화된 패키지",
      features: [
        "약 2시간 촬영",
        "본식 60분 전 신부대기실 - 본식 - 플라워샤워 - 단체사진 - 신랑신부님이 식장 나가실때까지 촬영",
        "원본 1,000장 내외",
        "프리미엄 보정본 15장",
        "짧은 영상 30개 내외",
        "Signature Calligraphy Letter Set"
      ],
    },
    {
      title: "패키지 B",
      headPrice: "₩450,000",
      bellPrice: "₩400,000",
      description: "2부 재입장 후 케이크 컷팅 및 샴페인 건배를 진행하는 예식에 최적화된 패키지",
      features: [
        "약 2시간 30분 ~ 3시간 촬영",
        "본식 60분 전 신부대기실 - 본식 - 2부 재 입장 및 샴페인 건배 - 하객인사 전까지 촬영",
        "원본 1,300장 내외",
        "프리미엄 보정본 20장",
        "짧은 영상 50개 내외",
        "Signature Calligraphy Letter Set"
      ],
    },
    {
      title: "패키지 C (2인 촬영)",
      headPrice: "₩600,000",
      bellPrice: "₩550,000",
      description: "대표작가/실장작가 촬영에 해작가(남자작가)의 신랑님 전문 촬영이 포함된 패키지",
      features: [
        "2인 작가 약 2시간 촬영",
        "본식 60분 전 신부대기실 - 본식 - 플라워샤워 - 단체사진 - 신랑신부님이 식장 나가실때까지 촬영",
        "원본 1,500장 내외",
        "프리미엄 보정본 25장",
        "짧은 영상 60개 내외",
        "Signature Calligraphy Letter Set",
      ],
    },
    {
      title: "패키지 H (for hotel venue)",
      headPrice: "₩650,000",
      bellPrice: "₩600,000",
      description: "식전 연출컷 촬영 및 리허설이 길게 진행되는 5성급 호텔 예식에 최적화된 패키지",
      features: [
        "약 4시간 ~ 4시간 30분 촬영",
        "본식 2시간 30분 전 - 식전 연출 및 리허설 - 1부(본식) - 원판 - 2부 재입장 및 샴페인 건배 - 하객인사 전까지 촬영",
        "원본 2,000장 내외",
        "프리미엄 보정본 25장",
        "짧은 영상 60개 내외",
        "Signature Calligraphy Letter Set",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-light mb-16 text-center">PACKAGES</h1>

          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="mb-4">{pkg.title}</CardTitle>
                    <CardDescription className="break-keep hyphens-auto">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pt-2 flex flex-col space-y-4">
                    <ul className="space-y-2 mb-auto">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
                          <span className="break-keep hyphens-auto">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <div className="text-large font-light">
                        <div className="mt-3">대표작가: {pkg.headPrice}</div>
                        <div>벨작가:&nbsp;&nbsp;&nbsp; {pkg.bellPrice}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-left mb-12">
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>원본 및 보정본은 네이버 마이박스 링크로 전달드립니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>원본은 눈 감은 컷, 초점 등 1차 검수를 진행 후 본식 당일 전달드립니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>프리미엄 보정본은 본식 1주일 이내 전달드립니다.</span>
            </p>
          </div>

          <div className="mb-12 text-left">
            <h2 className="text-2xl font-light mb-4">프리미엄 보정본</h2>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>비밀의화원의 모든 촬영물은 대표 작가가 보정합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>인물의 머리카락, 체형, 피부톤, 피부결 등 세심한 인물 보정과 함께 비밀의화원만의 감성 한 스푼 떨어뜨린 색감&톤 보정을 진행합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>모든 보정은 정품 Adobe lightroom & photoshop으로 진행합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>프리미엄 보정본 15장은 전반적인 예식이 다양하게 들어가며, 메인작가님과는 다른 비밀의화원만의 시선이 담긴 사진으로 구성합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>원본 수령날로부터 3일 내에 골라주실 경우, 최대 5장 신부님 pick으로 보정 진행 가능합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>고르시지 않을 경우 비밀의화원 작가들이 엄선한 사진으로 15장을 구성하여 보정을 진행합니다.</span>
            </p>
          </div>

          <div className="mb-12 text-left">
            <h2 className="text-2xl font-light mb-4">Signature Calligraphy Letter Set</h2>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>본식 아이폰 스냅을 진행하시는 분들에 한해 제공되는 비밀의화원만의 감각적인 캘리그라피 레터 세트 입니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>화원 신부님들의 만족도가 정말 높은 오직 비밀의화원만이 진행하는 특별한 시그니처 GIFT입니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>식 전에 두분의 사진을 받아 가장 어울리는 스타일로 대표작가가 <b>직접 글씨를 써서 제작</b>합니다.</span>
            </p>
            <div className="relative w-full h-[800px]">
              <Image
                src="/packages/signature-calligraphy-letter-set.jpg"
                alt="비밀의화원 캘리그래피"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mb-12 text-left">
            <h2 className="text-2xl font-light mb-4">환불 규정</h2>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>예약금 150,000원 입금 후 10일까지 100% 환불 가능합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>이후 예약금은 위약금으로 전환되어 환불 불가합니다. (10/18예약시, 10/27일까지 100%환불가능)</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>잔금은 본식 60일 전 입금 안내드리며, 잔금 지불 이후 환불이 불가합니다.</span>
            </p>
          </div>

          <div className="mb-12 text-left">
            <h2 className="text-2xl font-light mb-4">참고 사항</h2>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>사진은 촬영날로부터 14일 이후 별도 통보 없이 삭제됩니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>사진을 전달드릴 때, 삭제 예정일자를 알려드리오니 해당 일 전까지 다운받아 두시면 안전합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>모든 사진은 화질저하방지를 위해 네이버 마이박스를 통해 전달드립니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>소중한 웨딩데이의 원활한 진행을 위해 메인 스냅 업체가 아이폰 스냅을 동의하는 경우에만 촬영 진행합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>친구인 척 절대 불가하며 본식 전 동의여부 변동이 있을시 비밀의화원이 책임지지 않습니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>타 아이폰 스냅 업체와 동시 촬영 진행 불가하며 현장에서 진행 발견시 촬영 중단 및 전액 환불 불가합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
              <span>촬영 일자 변경은 1회 가능하며, 변경 요청일에 예약이 있는 경우는 변경 불가합니다. (타인 양도 불가)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
