"use client"

import { FaChevronDown } from "react-icons/fa6"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function TopBar() {
  return (
    <div className="bg-[#2c3e2e] text-white text-xs py-2.5 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="hidden md:block opacity-90">
          Standard Flat Rate Shipping $7.95 - Free Shipping on orders of $50 or more!{" "}
          <LocalizedClientLink href="#" className="underline hover:text-lime-300 ml-1">
            See Detail
          </LocalizedClientLink>
        </div>
        <div className="flex items-center gap-6 ml-auto">
          <div className="cursor-pointer hover:text-lime-300 transition-colors">
            ENG <FaChevronDown className="inline text-[10px] ml-1" />
          </div>
          <div className="cursor-pointer hover:text-lime-300 transition-colors">
            $ USD <FaChevronDown className="inline text-[10px] ml-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

