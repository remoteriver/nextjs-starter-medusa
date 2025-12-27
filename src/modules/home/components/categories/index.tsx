"use client"

import { FaChevronRight } from "react-icons/fa6"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const categories = [
  {
    label: "Caffeine Free",
    title: "Herbal Teas",
    href: "/store",
    bgColor: "bg-[#f9f9f9]",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    label: "Metabolic Booster",
    title: "Oolong Teas",
    href: "/store",
    bgColor: "bg-[#f4f4f4]",
    image: "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    label: "Malabar Coast",
    title: "Masala Chai",
    href: "/store",
    bgColor: "bg-[#fff8e1]",
    image: "https://images.pexels.com/photos/3756623/pexels-photo-3756623.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    label: "Antioxidant Rich",
    title: "Green Teas",
    href: "/store",
    bgColor: "bg-[#e8f5e9]",
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
]

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative ${category.bgColor} p-8 h-80 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300`}
            >
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  {category.label}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#2c3e2e] mt-1 mb-4">
                  {category.title}
                </h3>
                <LocalizedClientLink
                  href={category.href}
                  className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 hover:text-lime-700 hover:border-lime-700 transition-colors inline-flex items-center gap-1"
                >
                  Shop Now <FaChevronRight className="text-[10px]" />
                </LocalizedClientLink>
              </div>
              <div className="absolute bottom-0 right-0 w-48 h-48 overflow-hidden rounded-tl-[50px] opacity-90 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

