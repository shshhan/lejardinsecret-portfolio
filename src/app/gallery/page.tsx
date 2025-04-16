"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { useMenu } from "@/context/menu-context"
import { fetchVenues, Venue } from "@/lib/venues-client"
import { Search } from "lucide-react"

// Venue 인터페이스는 venues-client.ts에서 가져옴

export default function GalleryPage() {
  const { setIsMenuOpen } = useMenu()
  const [venues, setVenues] = useState<Venue[]>([])
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>([])
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // Reset menu state when navigating to this page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [setIsMenuOpen])

  // Fetch venues data
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

  // Apply filters when selectedFilter or searchQuery changes
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

  const handleVenueClick = (venueName: string) => {
    router.push(`/gallery/venue/${venueName}`)
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-light mb-8 text-center">GALLERY</h1>

          {/* Filtering System */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {/* "All" 버튼은 검색 중이 아닐 때만 표시 */}
              {!searchQuery && (
                <button
                  onClick={() => handleFilterChange("All")}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                    selectedFilter === "All" ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
              )}
              {venues
                .filter(venue =>
                  !searchQuery || venue.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((venue) => (
                <button
                  key={venue.name}
                  onClick={() => handleFilterChange(venue.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                    selectedFilter === venue.name
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {venue.name}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search venues..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>

          {/* Venue Previews */}
          {filteredVenues.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">일치하는 검색 결과가 없습니다.</p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {filteredVenues.map((venue, index) => (
                <motion.div
                  key={venue.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => handleVenueClick(venue.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full flex items-center justify-center">
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
                    <h2 className="text-lg font-medium">{venue.name}</h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
