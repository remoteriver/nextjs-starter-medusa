import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span
          className={clx("text-3xl font-bold", {
            "text-lime-700": selectedPrice.price_type === "sale",
            "text-[#2c3e2e]": selectedPrice.price_type !== "sale",
          })}
        >
          <span
            data-testid="product-price"
            data-value={selectedPrice.calculated_price_number}
          >
            {selectedPrice.calculated_price}
          </span>
        </span>
        {selectedPrice.price_type === "sale" && (
          <span className="bg-[#e57373] text-white text-xs font-bold px-2 py-1 rounded">
            -{selectedPrice.percentage_diff}% OFF
          </span>
        )}
      </div>
      {selectedPrice.price_type === "sale" && (
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Original:</span>
          <span
            className="line-through text-gray-400 text-lg"
            data-testid="original-product-price"
            data-value={selectedPrice.original_price_number}
          >
            {selectedPrice.original_price}
          </span>
        </div>
      )}
    </div>
  )
}
