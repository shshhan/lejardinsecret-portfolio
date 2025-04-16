"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useMenu } from "@/context/menu-context"

export default function PackagesPage() {
  const { setIsMenuOpen } = useMenu()

  // Reset menu state when navigating to this page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  const packages = [
    {
      title: "Essential",
      price: "₩150,000",
      description: "Perfect for individuals seeking quality portraits",
      features: [
        "1-hour photo session",
        "10 digital images",
        "Basic retouching",
        "Online gallery",
        "1 printed photo (8×10)",
      ],
    },
    {
      title: "Premium",
      price: "₩250,000",
      description: "Ideal for couples and small family sessions",
      features: [
        "2-hour photo session",
        "20 digital images",
        "Advanced retouching",
        "Online gallery",
        "3 printed photos (8×10)",
        "Photo album (10 pages)",
      ],
    },
    {
      title: "Luxury",
      price: "₩450,000",
      description: "Comprehensive package for special occasions",
      features: [
        "4-hour photo session",
        "All digital images",
        "Premium retouching",
        "Online gallery",
        "5 printed photos (8×10)",
        "Deluxe photo album (20 pages)",
        "Canvas print (16×20)",
        "Assistant photographer",
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
          <h1 className="text-3xl font-light mb-8 text-center">PACKAGES</h1>

          <p className="text-center mb-12 max-w-2xl mx-auto">
            We offer a range of photography packages designed to meet your specific needs. Each package includes
            high-quality images and professional service to ensure your complete satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="text-2xl font-bold mt-2">{pkg.price}</div>
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

          <div className="mt-16 text-center">
            <p className="mb-4">
              Looking for something specific? We also offer custom packages tailored to your needs.
            </p>
            <p className="font-medium">Contact us to discuss your requirements and get a personalized quote.</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
