"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
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
      title: "상품 A",
      headPrice: "₩400,000",
      bellPrice: "₩350,000",
      description: "본식 60분 전 신부대기실 ~ 본식 ~ 신랑신부님이 식장 나가실때까지 촬영",
      features: [
        "약 2시간 촬영",
        "원본 1,000장 내외",
        "프리미엄 보정본 15장",
        "짧은 영상 30개 내외",
        "Signature Calligraphy Letter Set"
      ],
    },
    {
      title: "상품 B",
      headPrice: "₩450,000",
      bellPrice: "₩400,000",
      description: "본식 60분 전 신부대기실 ~ 본식 ~ 2부 재입장 및 하객인사 전까지 촬영",
      features: [
        "약 2시간 30분 ~ 3시간 촬영",
        "원본 1,300장 내외",
        "프리미엄 보정본 20장",
        "짧은 영상 50개 내외",
        "Signature Calligraphy Letter Set"
      ],
    },
    {
      title: "상품 C (2인 촬영)",
      headPrice: "₩600,000",
      bellPrice: "₩550,000",
      description: "본식 60분 전 신부대기실 ~ 본식 ~ 신랑신부님이 식장 나가실때까지 촬영",
      features: [
        "2인 작가 약 2시간 촬영",
        "원본 1,500장 내외",
        "프리미엄 보정본 25장",
        "짧은 영상 60개 내외",
        "Signature Calligraphy Letter Set",
        "남자작가(해작가)는 신랑님을 위주로 촬영"
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

          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{pkg.title}</CardTitle>
                    <div className="text-large font-light mt-2">대표작가: {pkg.headPrice}</div>
                    <div className="text-large font-light mt-1">벨작가: {pkg.bellPrice}</div>
                    <CardDescription className="mt-2">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-left mb-12">
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>원본 및 보정본은 네이버 마이박스 링크로 전달드립니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>원본은 눈 감은 컷, 초점 등 1차 검수를 진행 후 본식 당일 전달드립니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>프리미엄 보정본은 본식 1주일 이내 전달드립니다.</span>
            </p>
          </div>

          <div className="mb-12 text-left">
            <h2 className="text-2xl font-light mb-4">프리미엄 보정본</h2>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>비밀의화원의 모든 촬영물은 대표 작가가 보정합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>인물의 머리카락, 체형, 피부톤, 피부결 등 세심한 인물 보정과 함께 비밀의화원만의 감성 한 스푼 떨어뜨린 색감&톤 보정을 진행합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>모든 보정은 정품 Adobe lightroom & photoshop으로 진행합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>프리미엄 보정본 15장은 전반적인 예식이 다양하게 들어가며, 메인작가님과는 다른 비밀의 화원만의 시선이 담긴 사진으로 구성합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>원본 수령날로부터 3일 내에 골라주실 경우, 최대 5장 신부님 pick으로 보정 진행 가능합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>고르시지 않을 경우 비밀의화원 작가들이 엄선한 사진으로 15장을 구성하여 보정을 진행합니다.</span>
            </p>
          </div>

          <div className="mb-12 text-left">
            <h2 className="text-2xl font-light mb-4">Signature Calligraphy Letter Set</h2>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>본식 아이폰 스냅을 진행하시는 분들에 한해 제공되는 비밀의화원만의 감각적인 캘리그라피 레터세트 입니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>오직 비밀의 화원만이 진행하는 특별한 시그니처 GIFT입니다.</span>
            </p>
            <div className="relative w-full h-[800px]">
              <Image
                src="/packages/signature-calligraphy-letter-set.jpg"
                alt="비밀의 화원 캘리그래피"
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
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>예약금 150,000원 입금 후 10일까지 100% 환불 가능합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>이후 예약금은 위약금으로 전환되어 환불 불가합니다. (10/18예약시, 10/27일까지 100%환불가능)</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>잔금은 본식 60일 전 입금 안내드리며, 잔금 지불 이후 환불이 불가합니다.</span>
            </p>
          </div>

          <div className="mb-12 text-left">
            <h2 className="text-2xl font-light mb-4">참고 사항</h2>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>사진은 촬영날로부터 14일 이후 별도 통보 없이 삭제됩니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>사진을 전달드릴 때, 삭제 예정일자를 알려드리오니 해당 일 전까지 다운받아 두시면 안전합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>모든 사진은 화질저하방지를 위해 네이버 마이박스를 통해 전달드립니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>소중한 웨딩데이의 원활한 진행을 위해 메인 스냅 업체가 아이폰 스냅을 동의하는 경우에만 촬영 진행합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>친구인 척 절대 불가하며 본식 전 동의여부 변동이 있을시 비밀의화원이 책임지지 않습니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>타 아이폰 스냅 업체와 동시 촬영 진행 불가하며 현장에서 진행 발견시 촬영 중단 및 전액 환불 불가합니다.</span>
            </p>
            <p className="mb-1 flex items-start">
              <Check className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0" />
              <span>촬영 일자 변경은 1회 가능하며, 변경 요청일에 예약이 있는 경우는 변경 불가합니다. (타인 양도 불가)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
