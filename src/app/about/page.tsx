"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
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
          <h1 className="text-3xl font-light mb-8 text-center">ABOUT</h1>

          <div className="mb-12">
            <h2 className="text-xl font-light mb-4">Our Company</h2>
            <p className="mb-4">
              Welcome to our creative studio. We are a team of passionate artists dedicated to capturing beautiful
              moments and creating stunning visual experiences. Our approach combines artistic vision with technical
              expertise to deliver exceptional results for our clients.
            </p>
            <p>
              Founded with a vision to redefine visual storytelling, we have grown into a collective of talented
              individuals who share a common passion for art and photography. Our work spans across various domains
              including portrait photography, commercial projects, and artistic collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Studio"
                width={400}
                height={400}
                className="w-full h-auto object-cover mb-4"
              />
              <h3 className="text-lg font-medium mb-2">Our Studio</h3>
              <p className="text-sm">
                Located in the heart of the city, our studio is equipped with state-of-the-art equipment and designed to
                inspire creativity.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Our Process"
                width={400}
                height={400}
                className="w-full h-auto object-cover mb-4"
              />
              <h3 className="text-lg font-medium mb-2">Our Process</h3>
              <p className="text-sm">
                We believe in a collaborative approach, working closely with our clients to understand their vision and
                bring it to life.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-light mb-6">Our Artists</h2>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Artist 1"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium mb-2">Hana Knizova</h3>
                  <p className="text-sm text-gray-700 mb-4">Lead Photographer & Creative Director</p>
                  <p>
                    With over a decade of experience in photography, Hana brings a unique perspective to every project.
                    Her work has been featured in numerous publications and exhibitions around the world. Hana
                    specializes in portrait photography and is known for her ability to capture authentic emotions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Artist 2"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium mb-2">Alex Johnson</h3>
                  <p className="text-sm text-gray-700 mb-4">Senior Photographer & Post-Production Specialist</p>
                  <p>
                    Alex brings technical precision and artistic vision to our team. With a background in fine arts and
                    digital media, Alex excels in creating visually stunning compositions and is an expert in
                    post-production techniques. His attention to detail ensures that every image meets our high
                    standards of quality.
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
