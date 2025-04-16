import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getVenueImages } from "@/lib/venues"
import { ChevronLeft } from "lucide-react"

interface VenuePageProps {
  params: Promise<{
    venueName: string
  }>
}

export default async function VenuePage({ params }: VenuePageProps) {
  // Next.js 15.3.0에서는 params가 Promise이므로 await 처리
  const resolvedParams = await params
  const { venueName } = resolvedParams

  try {
    const venueData = await getVenueImages(venueName)

    if (!venueData || !venueData.images || venueData.images.length === 0) {
      notFound()
    }

    return (
      <div className="container mx-auto px-4 pt-24 pb-16 py-8 max-w-7xl">

        <h1 className="text-3xl font-bold mb-8 capitalize text-center">{venueData.name}</h1>
        <h3 className="text-lg font-light text-gray-600 mb-14 text-center">Photographer: {venueData.photographer}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venueData.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
            >
              <div>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${venueData.name} image ${index + 1}`}
                  width={800}
                  height={600}
                  className="transition-transform duration-500 group-hover:scale-105"
                  style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Gallery
          </Link>
        </div>
      </div>
    )
  } catch (error) {
    console.error(`Error loading venue ${venueName}:`, error)
    notFound()
  }
}
