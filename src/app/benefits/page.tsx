"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useMenu } from "@/context/menu-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Dot, Gift, Heart, Info, Leaf, Sprout, Users} from "lucide-react"

export default function BenefitsPage() {
  const { setIsMenuOpen } = useMenu()

  // Reset menu state when navigating to this page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  // 페이백 혜택 데이터
  const benefits = [
    {
      title: "계약 후기 페이백",
      description: "계약 완료 후 블로그 or 웨딩 카페 계약 후기 작성 시 1만 원 페이백",
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      details: [
        "기간: 예약한 시점 ~ 본식 전까지 작성 후 링크 전달",
        "6개월 이상 작성 글 유지",
        "사진 3장 이상 첨부",
        "포스팅 글자 300자 이상",
        "비밀의화원 sns 등에서 캡처한 사진 업로드 경우 다른 신랑신부님 얼굴 모자이크 처리 후 사진 업로드 부탁드립니다."
      ]
    },
    {
      title: "본식 스냅 후기 페이백",
      description: "본식 스냅 이용 후 블로그 or 웨딩 카페 or 인스타그램에 추천 후기 작성 시 1만 원 페이백",
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      details: [
        "기간: 본식 후 30일 내 작성 후 링크 전달",
        "6개월 이상 작성 글 유지",
        "보정본 5장 이상",
        "포스팅 글자 300자 이상"
      ]
    },
    {
      title: "짝꿍 할인",
      description: "짝꿍 1명 가능. 인당 1만 원 페이백",
      icon: <Users className="h-6 w-6 text-pink-500" />,
      details: [
        "짝꿍 코드: 본식 날짜 + 성함",
        "ex) 25. 5. 5. 예식인 김가영 님 짝꿍 코드 = 250505 김가영"
      ]
    },
    {
      title: "추가 스냅 할인",
      description: "",
      icon: <Gift className="h-6 w-6 text-pink-500" />,
      details: [
        "본식 아이폰 스냅과 더불어 브라이덜 샤워 스냅 or 스튜디오 아이폰 스냅 함께 진행 시, 30,000원 예약 즉시 할인"
      ]
    }
  ]

  // 짝꿍 할인 적용 방법 데이터
  const partnerDiscountMethods = [
    {
      id: 1,
      title: "예약문의하기 전 받은 짝꿍 코드가 있을 경우",
      description: "예약문의하실 때, 받은 다른 분의 짝꿍 코드를 함께 전달해 주세요. (이미 계약을 완료하신 두 신부님이 서로 짝꿍은 불가하므로 꼭 예약문의 시점에 받은 코드를 전달해 주세요)"
    },
    {
      id: 2,
      title: "예약문의하기 전 받은 짝꿍 코드가 없을 경우",
      description: "비밀의화원 계약 진행 이후 또 다른 신규 계약자분이 본인의 짝꿍 코드로 계약 완료 시 두 분 다 적용 완료됩니다."
    },
    {
      id: 3,
      title: "두 분 다 신규 계약자인데 서로 짝꿍 맺기를 원할 경우",
      description: "예약문의하실 때, 서로의 \"본식 일자+성함\" 전달해 주세요."
    }
  ]

  // 짝꿍 할인 참고 사항
  const partnerDiscountNotes = [
    "본식이 끝난 신부님의 짝꿍 코드는 적용하실 수 없습니다.",
    "짝꿍 맺은 분이 계약 취소 시, 짝꿍도 취소됩니다.",
    "이미 비밀의화원 계약 완료하신 두 신부님께서 서로 짝꿍을 맺으실 수 없습니다."
  ]

  // 기타 참고 사항
  const otherNotes = [
    "페이백은 모든 할인 적용 가능 기간이 종료된 뒤인 본식 후 5~6주 차에 일괄 진행됩니다.",
    "다이렉트 웨딩 카페는 삭제 이슈로 작성 불가하며 페이백 진행 시점에서 글이 삭제된 경우엔 페이백 혜택 적용되지 않으므로 안전한 네이버 블로그 후기 작성을 권장 드립니다."
  ]

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-light mb-4 text-center">페이백 혜택</h1>

          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
            비밀의화원에서는 다양한 페이백 혜택을 제공해 드립니다. 아래 내용을 확인하시고 혜택을 놓치지 마세요.
          </p>

          {/* 페이백 혜택 섹션 */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h2 className="text-2xl font-light mb-8 pb-2 border-b border-gray-200">페이백 혜택 안내</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">{benefit.title}</CardTitle>
                      <CardDescription className="text-base break-keep hyphens-auto">{benefit.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pt-2 flex flex-col space-y-4">
                      <ul className="space-y-2">
                        {benefit.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
                            <span className="break-keep hyphens-auto">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 짝꿍 할인 적용 방법 섹션 */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-light mb-8 pb-2 border-b border-gray-200">짝꿍 할인 적용하는 방법</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerDiscountMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{method.id}. {method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{method.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 참고 사항 섹션 - 두 개의 카드로 구성 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* 짝꿍 할인 관련 참고 사항 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-gray-600" />
                    <CardTitle className="text-xl">짝꿍 할인 관련 참고 사항</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {partnerDiscountNotes.map((note, i) => (
                      <li key={i} className="flex items-start">
                        <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.section>

            {/* 기타 참고 사항 */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Info className="h-6 w-6 text-gray-600" />
                    <CardTitle className="text-xl">기타 참고하실 사항</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {otherNotes.map((note, i) => (
                      <li key={i} className="flex items-start">
                        <Dot className="h-6 w-6 text-gray-800 mr-1 flex-shrink-0" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
