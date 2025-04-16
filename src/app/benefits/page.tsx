"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useMenu } from "@/context/menu-context"

export default function BenefitsPage() {
  const { setIsMenuOpen } = useMenu()

  // Reset menu state when navigating to this page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  const benefits = [
    {
      title: "Professional Quality",
      description:
        "All our work is produced with high-end equipment and professionally edited to ensure the best quality.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Personalized Experience",
      description:
        "We work closely with you to understand your vision and create images that reflect your unique style.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Quick Turnaround",
      description:
        "Receive your edited photos within 7-10 business days, with rush options available for urgent needs.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Flexible Scheduling",
      description: "We offer weekend and evening sessions to accommodate your busy schedule.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Location Options",
      description: "Choose between our professional studio or outdoor locations for your photo session.",
      icon: "/placeholder.svg?height=100&width=100",
    },
    {
      title: "Digital & Print",
      description: "Receive both digital files and professionally printed photos with every package.",
      icon: "/placeholder.svg?height=100&width=100",
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
          <h1 className="text-3xl font-light mb-8 text-center">BENEFITS</h1>

          <p className="text-center mb-12 max-w-2xl mx-auto">
            When you choose our services, you're not just getting photographs – you're investing in an experience and
            quality that will last a lifetime. Here are some of the benefits of working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4">
                      <Image
                        src={benefit.icon || "/placeholder.svg"}
                        alt={benefit.title}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <CardTitle className="text-center">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-light mb-6 text-center">Our Commitment to You</h2>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="mb-4">
                We are committed to providing you with an exceptional experience from start to finish. Our team is
                dedicated to ensuring that your vision comes to life through our photography.
              </p>
              <p className="mb-4">
                We believe in building lasting relationships with our clients, which is why many of them return to us
                for different life events and milestones. Your satisfaction is our priority, and we go above and beyond
                to exceed your expectations.
              </p>
              <p>
                When you choose us, you're not just hiring a photographer – you're partnering with a team that cares
                about capturing your special moments in the most beautiful way possible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
