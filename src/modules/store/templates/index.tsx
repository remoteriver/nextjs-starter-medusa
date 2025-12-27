import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import ProductFilterBar from "@modules/store/components/product-filter-bar"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-[#2c3e2e] mb-4" data-testid="store-page-title">
            All Products
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore our complete collection of premium teas, carefully curated for your enjoyment.
          </p>
        </div>
        <ProductFilterBar sortBy={sort} />
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </section>
  )
}

export default StoreTemplate
