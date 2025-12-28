"use client"

import { addToCart } from "@lib/data/cart"
import { useIntersection } from "@lib/hooks/use-in-view"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/product-actions/option-select"
import { isEqual } from "lodash"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import ProductPrice from "../product-price"
import MobileActions from "./mobile-actions"
import { useRouter } from "next/navigation"

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductActions({
  product,
  disabled,
}: ProductActionsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string
  const hasInitializedRef = useRef(false)

  // Select the default variant (first variant) when product page loads
  useEffect(() => {
    if (hasInitializedRef.current || !product.variants?.length) {
      return
    }

    // Check if there's a variant ID in the URL query params
    const variantIdFromUrl = searchParams.get("v_id")
    
    if (variantIdFromUrl) {
      const variant = product.variants.find((v) => v.id === variantIdFromUrl)
      if (variant) {
        const variantOptions = optionsAsKeymap(variant.options)
        setOptions(variantOptions ?? {})
        hasInitializedRef.current = true
        return
      }
    }

    // Otherwise, select the first variant by default
    const firstVariant = product.variants[0]
    if (firstVariant) {
      const variantOptions = optionsAsKeymap(firstVariant.options)
      setOptions(variantOptions ?? {})
      hasInitializedRef.current = true
    }
  }, [product.variants, searchParams])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  //check if the selected options produce a valid variant
  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    const value = isValidVariant ? selectedVariant?.id : null

    if (params.get("v_id") === value) {
      return
    }

    if (value) {
      params.set("v_id", value)
    } else {
      params.delete("v_id")
    }

    router.replace(pathname + "?" + params.toString())
  }, [selectedVariant, isValidVariant])

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
      countryCode,
    })

    setIsAdding(false)
  }

  // Filter options and their values to only show those that exist in at least one variant
  const availableOptions = useMemo(() => {
    if (!product.options || !product.variants?.length) {
      return []
    }

    // Create a map of option_id -> Set of values that exist in variants
    const optionValuesInVariants = new Map<string, Set<string>>()
    product.variants.forEach((variant) => {
      variant.options?.forEach((variantOption) => {
        if (variantOption.option_id && variantOption.value) {
          if (!optionValuesInVariants.has(variantOption.option_id)) {
            optionValuesInVariants.set(variantOption.option_id, new Set<string>())
          }
          optionValuesInVariants.get(variantOption.option_id)?.add(variantOption.value)
        }
      })
    })

    // Filter product options to only include those that exist in variants
    // and filter their values to only include those that exist in variants
    return product.options
      .filter((option) => optionValuesInVariants.has(option.id))
      .map((option) => {
        const availableValues = optionValuesInVariants.get(option.id) || new Set<string>()
        // Filter option.values to only include values that exist in variants
        const filteredValues = (option.values || []).filter((val) =>
          availableValues.has(val.value)
        )
        return {
          ...option,
          values: filteredValues,
        }
      })
  }, [product.options, product.variants])


  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        {availableOptions.length > 0 && (
          <div className="flex flex-col gap-y-4 mb-6">
            {availableOptions.map((option) => {
              return (
                <div key={option.id}>
                  <OptionSelect
                    option={option}
                    current={options[option.id]}
                    updateOption={setOptionValue}
                    title={option.title ?? ""}
                    data-testid="product-options"
                    disabled={!!disabled || isAdding}
                  />
                </div>
              )
            })}
            <Divider />
          </div>
        )}

        <div className="my-6">
          <ProductPrice product={product} variant={selectedVariant} />
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={
            !inStock ||
            !selectedVariant ||
            !!disabled ||
            isAdding ||
            !isValidVariant
          }
          variant="primary"
          className="w-full h-12 !bg-[#2c3e2e] hover:!bg-[#1f2a20] text-white font-bold uppercase tracking-wider rounded-none transition-colors"
          isLoading={isAdding}
          data-testid="add-product-button"
        >
          {!selectedVariant && !options
            ? "Select variant"
            : !inStock || !isValidVariant
            ? "Out of stock"
            : "Add to cart"}
        </Button>
        <MobileActions
          product={product}
          variant={selectedVariant}
          options={options}
          updateOptions={setOptionValue}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        />
      </div>
    </>
  )
}
