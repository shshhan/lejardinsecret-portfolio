// This file is meant to be used only in Server Components or API Routes
import fs from "fs/promises"
import path from "path"
import venuesMetadata from "../data/venues-metadata.json"

const VENUES_DIR = path.join(process.cwd(), "public", "venues")

// 베뉴 메타데이터 타입 정의
interface VenueMetadata {
  displayName: string
  photographer: string
}

// 전체 메타데이터 타입 정의
interface VenuesMetadata {
  [key: string]: VenueMetadata
}

export async function getVenues() {
  try {
    const venues = await fs.readdir(VENUES_DIR)

    const venueData = await Promise.all(
      venues.map(async (venueName) => {
        const venuePath = path.join(VENUES_DIR, venueName)
        const stats = await fs.stat(venuePath)

        // Skip if not a directory
        if (!stats.isDirectory()) {
          return null
        }

        // Get the first image in the venue directory
        const files = await fs.readdir(venuePath)
        const imageFiles = files.filter((file) => {
          const ext = path.extname(file).toLowerCase()
          return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)
        })

        if (imageFiles.length === 0) {
          return null
        }

        // Use the first image as the preview
        const previewImage = `/venues/${venueName}/${imageFiles[0]}`

        // 메타데이터에서 추가 정보 가져오기
        const metadata = (venuesMetadata as VenuesMetadata)[venueName] || {
          displayName: venueName,
          photographer: "Unknown",
        }

        return {
          id: venueName,
          name: metadata.displayName,
          photographer: metadata.photographer,
          previewImage,
        }
      }),
    )

    // Filter out null values (non-directories or directories without images)
    return venueData.filter(Boolean)
  } catch (error) {
    console.error("Error reading venues directory:", error)
    return []
  }
}

export async function getVenueImages(venueId: string) {
  try {
    const venuePath = path.join(VENUES_DIR, venueId)
    const files = await fs.readdir(venuePath)

    // Filter for image files
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)
    })

    // 메타데이터에서 추가 정보 가져오기
    const metadata = (venuesMetadata as VenuesMetadata)[venueId] || {
      displayName: venueId,
      photographer: "Unknown",
    }

    return {
      id: venueId,
      name: metadata.displayName,
      photographer: metadata.photographer,
      images: imageFiles.map((file) => `/venues/${venueId}/${file}`)
    }
  } catch (error) {
    console.error(`Error reading venue directory ${venueId}:`, error)
    return null
  }
}
