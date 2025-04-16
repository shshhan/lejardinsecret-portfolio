// 클라이언트 컴포넌트에서 사용할 수 있는 베뉴 관련 함수
import venuesMetadata from "../data/venues-metadata.json"

// 베뉴 메타데이터 타입 정의
interface VenueMetadata {
  displayName: string
  photographer: string
}

// 전체 메타데이터 타입 정의
interface VenuesMetadata {
  [key: string]: VenueMetadata
}

// 베뉴 타입 정의
export interface Venue {
  id: string
  name: string
  photographer: string
  previewImage: string
}

// 베뉴 세부 정보 타입 정의
export interface VenueDetail {
  id: string
  name: string
  photographer: string
  images: string[]
}

// API를 통해 베뉴 데이터 가져오기
export async function fetchVenues(): Promise<Venue[]> {
  try {
    const response = await fetch('/api/venues')
    if (!response.ok) {
      throw new Error('Failed to fetch venues')
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching venues:", error)
    return []
  }
}

// 베뉴 ID로 메타데이터 가져오기
export function getVenueMetadata(venueId: string): VenueMetadata {
  return (venuesMetadata as VenuesMetadata)[venueId] || {
    displayName: venueId,
    photographer: "Unknown"
  }
}

// API를 통해 베뉴 세부 정보 가져오기
export async function fetchVenueDetail(venueId: string): Promise<VenueDetail | null> {
  try {
    const response = await fetch(`/api/venues/${venueId}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch venue detail for ${venueId}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching venue detail for ${venueId}:`, error)
    return null
  }
}

// 모든 베뉴의 모든 이미지 가져오기
export async function fetchAllVenueImages(): Promise<string[]> {
  try {
    // 모든 베뉴 가져오기
    const venues = await fetchVenues()

    // 각 베뉴의 세부 정보 가져오기
    const venueDetailsPromises = venues.map(venue => fetchVenueDetail(venue.id))
    const venueDetails = await Promise.all(venueDetailsPromises)

    // 모든 이미지 URL 추출
    const allImages: string[] = []
    venueDetails.forEach(venueDetail => {
      if (venueDetail && venueDetail.images) {
        allImages.push(...venueDetail.images)
      }
    })

    return allImages
  } catch (error) {
    console.error('Error fetching all venue images:', error)
    return []
  }
}
