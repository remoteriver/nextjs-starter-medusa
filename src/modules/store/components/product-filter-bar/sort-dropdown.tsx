"use client"

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6"
import { clx } from "@medusajs/ui"
import { SortOptions } from "../refinement-list/sort-products"

type SortDropdownProps = {
  sortBy: SortOptions
  onSortChange: (value: SortOptions) => void
}

const sortOptions = [
  {
    value: "created_at" as SortOptions,
    label: "Latest Arrivals",
  },
  {
    value: "price_asc" as SortOptions,
    label: "Price: Low -> High",
  },
  {
    value: "price_desc" as SortOptions,
    label: "Price: High -> Low",
  },
]

const SortDropdown = ({ sortBy, onSortChange }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const currentLabel = sortOptions.find((opt) => opt.value === sortBy)?.label || "Sort"

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        <FaChevronDown
          className={clx("text-xs transition-transform", {
            "rotate-180": isOpen,
          })}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 py-2">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value)
                  setIsOpen(false)
                }}
                className={clx(
                  "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
                  {
                    "bg-gray-50 font-medium text-[#2c3e2e]": sortBy === option.value,
                    "text-gray-700": sortBy !== option.value,
                  }
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SortDropdown

