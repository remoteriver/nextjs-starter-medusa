import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="flex flex-col gap-y-6">
      {product.collection && (
        <LocalizedClientLink
          href={`/collections/${product.collection.handle}`}
          className="text-sm text-lime-700 hover:text-lime-800 font-medium uppercase tracking-wider"
        >
          {product.collection.title}
        </LocalizedClientLink>
      )}
      <Heading
        level="h1"
        className="text-4xl md:text-5xl font-serif font-bold text-[#2c3e2e] leading-tight"
        data-testid="product-title"
      >
        {product.title}
      </Heading>

      {product.description && (
        <Text
          className="text-base text-gray-600 leading-relaxed whitespace-pre-line"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      )}
    </div>
  )
}

export default ProductInfo
