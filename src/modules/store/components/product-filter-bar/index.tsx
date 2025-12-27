"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FaChevronDown } from "react-icons/fa6"
import { clx } from "@medusajs/ui"

import SortDropdown from "./sort-dropdown"
import { SortOptions } from "../refinement-list/sort-products"

type ProductFilterBarProps = {
  sortBy: SortOptions
}

const ProductFilterBar = ({ sortBy }: ProductFilterBarProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [openFilter, setOpenFilter] = useState<string | null>(null)

  const createQueryString = (name: string, values: string[]) => {
    const params = new URLSearchParams(searchParams)
    if (values.length > 0) {
      params.set(name, values.join(","))
    } else {
      params.delete(name)
    }
    return params.toString()
  }

  const setQueryParams = (name: string, values: string[]) => {
    const query = createQueryString(name, values)
    router.push(`${pathname}?${query}`)
  }

  const getSelectedValues = (filterName: string): string[] => {
    const values = searchParams.get(filterName)
    return values ? values.split(",") : []
  }

  const toggleFilter = (filterName: string, value: string) => {
    const currentValues = getSelectedValues(filterName)
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]
    setQueryParams(filterName, newValues)
  }

  const handleSortChange = (value: SortOptions) => {
    const params = new URLSearchParams(searchParams)
    params.set("sortBy", value)
    router.push(`${pathname}?${params.toString()}`)
  }

  // Mock filter options - replace with actual data from your API
  const categoryOptions = [
    { id: "1", label: "Herbal Teas" },
    { id: "2", label: "Green Teas" },
    { id: "3", label: "Black Teas" },
    { id: "4", label: "Oolong Teas" },
  ]

  const brandOptions = [
    { id: "1", label: "Premium Tea Co." },
    { id: "2", label: "Organic Origins" },
    { id: "3", label: "Mountain Blend" },
  ]

  const colorOptions = [
    { id: "1", label: "Green" },
    { id: "2", label: "Black" },
    { id: "3", label: "White" },
    { id: "4", label: "Oolong" },
  ]

  const sizeOptions = [
    { id: "1", label: "50g" },
    { id: "2", label: "100g" },
    { id: "3", label: "250g" },
    { id: "4", label: "500g" },
  ]

  const FilterDropdown = ({
    label,
    filterName,
    options,
  }: {
    label: string
    filterName: string
    options: { id: string; label: string }[]
  }) => {
    const selectedValues = getSelectedValues(filterName)
    const isOpen = openFilter === filterName

    return (
      <div className="relative">
        <button
          onClick={() => setOpenFilter(isOpen ? null : filterName)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          <span>{label}</span>
          {selectedValues.length > 0 && (
            <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full">
              {selectedValues.length}
            </span>
          )}
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
              onClick={() => setOpenFilter(null)}
            />
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20 p-4">
              <div className="flex flex-col gap-2">
                {options.map((option) => {
                  const isChecked = selectedValues.includes(option.id)
                  return (
                    <label
                      key={option.id}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleFilter(filterName, option.id)}
                        className="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                      />
                      <span className="text-sm text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 mb-8">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Sort</span>
        <SortDropdown sortBy={sortBy} onSortChange={handleSortChange} />
      </div>

      <div className="flex items-center gap-4">
        <FilterDropdown
          label="Category"
          filterName="category"
          options={categoryOptions}
        />
        <FilterDropdown
          label="Brand"
          filterName="brand"
          options={brandOptions}
        />
        <FilterDropdown
          label="Color"
          filterName="color"
          options={colorOptions}
        />
        <FilterDropdown
          label="Sizes"
          filterName="size"
          options={sizeOptions}
        />
      </div>
    </div>
  )
}

export default ProductFilterBar

