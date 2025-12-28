"use client"

import { FaLeaf, FaSeedling, FaAward, FaChevronRight } from "react-icons/fa6"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const features = [
  {
    icon: FaLeaf,
    label: "Since 1983",
    title: "Heritage & Tradition",
    description: "Established in 1983, our Tea has been sourcing, manufacturing and distributing quality and affordable tea.",
    link: "#",
    linkText: "Our Story",
  },
  {
    icon: FaSeedling,
    label: "Pure & Natural",
    title: "Fresh from Source",
    description: "We believe in the magic of freshly plucked leaves from the tea gardens. Find out what it means to be Fresh from Source.",
    link: "/store",
    linkText: "Shop Our Teas",
  },
  {
    icon: FaAward,
    label: "Quality",
    title: "Organic Ingredients",
    description: "Made with over 140 exotic spices, our teas are purposefully blended both delicious taste and healthful benefits.",
    link: "#",
    linkText: "Explore Out Ingredients",
  },
]

export default function Features() {
  return (
    <section className="border-b border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 mb-6 text-lime-700 flex items-center justify-center">
                  <IconComponent className="text-4xl" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {feature.label}
                </span>
                <h4 className="text-xl font-bold text-[#2c3e2e] mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {feature.description}
                </p>
                <LocalizedClientLink
                  href={feature.link}
                  className="mt-4 text-xs font-bold underline decoration-gray-300 hover:decoration-lime-600 hover:text-lime-700 transition-all inline-flex items-center gap-1"
                >
                  {feature.linkText} <FaChevronRight className="text-[8px]" />
                </LocalizedClientLink>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

