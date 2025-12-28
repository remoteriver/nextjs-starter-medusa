"use client"

import { FaCartPlus, FaRegHeart, FaMagnifyingGlass, FaBagShopping, FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { getProductPrice } from "@lib/util/get-product-price"
import { addToCart } from "@lib/data/cart"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function ProductCard({
  product,
  region,
}: {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({ product })
  const countryCode = useParams().countryCode as string
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!product.variants?.[0]?.id) return
    
    setIsAdding(true)
    await addToCart({
      variantId: product.variants[0].id,
      quantity: 1,
      countryCode,
    })
    setIsAdding(false)
  }

  const originalPrice = cheapestPrice?.price_type === "sale" ? cheapestPrice.original_price : null
  const salePrice = cheapestPrice?.calculated_price

  // Generate random rating (you can replace this with actual product rating data)
  const rating = 4.5
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="group">
      <div className="relative bg-[#f9f9f9] aspect-[4/5] overflow-hidden mb-4">
        {cheapestPrice?.price_type === "sale" && (
          <span className="absolute top-3 left-3 bg-[#e57373] text-white text-[10px] font-bold px-2 py-1 z-20">
            30% OFF
          </span>
        )}
        <LocalizedClientLink href={`/products/${product.handle}`} className="block w-full h-full">
          <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured
              className="!p-0 !bg-[#f9f9f9] !shadow-none !rounded-none h-full"
            />
          </div>
        </LocalizedClientLink>
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-lime-600 hover:text-white transition-colors"
            title="Add to cart"
          >
            <FaCartPlus />
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-lime-600 hover:text-white transition-colors" title="Add to wishlist">
            <FaRegHeart />
          </button>
          <LocalizedClientLink
            href={`/products/${product.handle}`}
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-lime-600 hover:text-white transition-colors"
            title="Quick view"
          >
            <FaMagnifyingGlass />
          </LocalizedClientLink>
        </div>
      </div>
      <div className="text-left">
        <div className="flex text-yellow-400 text-xs mb-2">
          {Array.from({ length: fullStars }).map((_, i) => (
            <FaStar key={i} />
          ))}
          {hasHalfStar && <FaStarHalfStroke />}
          {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
        </div>
        <LocalizedClientLink href={`/products/${product.handle}`}>
          <h3 className="font-bold text-[#2c3e2e] text-lg mb-1 group-hover:text-lime-700 transition-colors cursor-pointer">
            {product.title}
          </h3>
        </LocalizedClientLink>
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-gray-500">
            {originalPrice && (
              <span className="line-through text-gray-300 mr-2">
                {originalPrice}
              </span>
            )}
            {salePrice && (
              <span>
                {salePrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="text-gray-400 hover:text-lime-700"
            title="Add to cart"
          >
            <FaBagShopping />
          </button>
        </div>
      </div>
    </div>
  )
}

