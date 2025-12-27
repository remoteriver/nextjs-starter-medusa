"use client"
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
// import Image from "next/image"

// type ImageGalleryProps = {
//   images: HttpTypes.StoreProductImage[]
// }


import { useState } from "react"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]?.url || null)

  if (!images || images.length === 0) {
    return null
  }

  const mainImage = images.find((img) => img.url === selectedImage) || images[0]

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#f9f9f9] rounded-lg">
        {mainImage?.url && (
          <Image
            src={mainImage.url}
            alt={mainImage.alt || "Product image"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.url || null)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                selectedImage === image.url
                  ? "border-lime-600 ring-2 ring-lime-200"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              {image.url && (
                <Image
                  src={image.url}
                  alt={image.alt || `Thumbnail ${image.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 10vw"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
