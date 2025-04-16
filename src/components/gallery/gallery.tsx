"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { fetchVenues, Venue } from "@/lib/venues-client"
import FilterBar from "./filter-bar"

// Venue 인터페이스는 venues-client.ts에서 가져옴

export default function Gallery() {
  const [venues, setVenues] = useState<Venue[]>([])
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>([])
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const loadVenues = async () => {
      try {
        const venueData = await fetchVenues()
        setVenues(venueData)
        setFilteredVenues(venueData)
      } catch (error) {
        console.error("Error fetching venues:", error)
      }
    }

    loadVenues()
  }, [])

  useEffect(() => {
    let result = venues

    // Apply filter by venue name if not "All"
    if (selectedFilter !== "All") {
      result = result.filter((venue) => venue.name === selectedFilter)
    }

    // Apply search query filter
    if (searchQuery) {
      result = result.filter((venue) => venue.name.toLowerCase().includes(searchQuery.toLowerCase()))

      // If only one result remains, automatically select it
      if (result.length === 1 && selectedFilter !== result[0].name) {
        setSelectedFilter(result[0].name)
      }
    } else if (selectedFilter !== "All" && searchQuery === "") {
      // If search query is cleared, reset to "All"
      setSelectedFilter("All")
    }

    setFilteredVenues(result)
  }, [selectedFilter, searchQuery, venues])

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  const handleVenueClick = (venueId: string) => {
    router.push(`/gallery/venue/${venueId}`)
  }

  return (
    <div>
      <FilterBar
        venues={venues.map((venue) => venue.name)}
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {filteredVenues.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No venues found matching your criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {filteredVenues.map((venue) => (
            <div key={venue.id} className="cursor-pointer group" onClick={() => handleVenueClick(venue.id)}>
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <div>
                  <Image
                    src={venue.previewImage || "/placeholder.svg"}
                    alt={venue.name}
                    width={400}
                    height={300}
                    className="transition-transform duration-500 group-hover:scale-105"
                    style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">{venue.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Photographer: {venue.photographer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
