"use client"
import { Search } from "lucide-react"

interface FilterBarProps {
  venues: string[]
  selectedFilter: string
  onFilterChange: (filter: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export default function FilterBar({
  venues,
  selectedFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex flex-wrap gap-2">
        {/* "All" 버튼은 검색 중이 아닐 때만 표시 */}
        {!searchQuery && (
          <FilterChip label="All" isSelected={selectedFilter === "All"} onClick={() => onFilterChange("All")} />
        )}
        {venues
          .filter(venue =>
            !searchQuery || venue.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((venue) => (
          <FilterChip
            key={venue}
            label={venue}
            isSelected={selectedFilter === venue}
            onClick={() => onFilterChange(venue)}
          />
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
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  )
}

interface FilterChipProps {
  label: string
  isSelected: boolean
  onClick: () => void
}

function FilterChip({ label, isSelected, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  )
}
