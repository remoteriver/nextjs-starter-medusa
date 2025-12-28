"use client"

import { FaChevronRight } from "react-icons/fa6"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative bg-[#f4f7f0] overflow-hidden h-[650px] flex items-center">
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-0 right-0 w-2/3 h-full bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          maskImage: "linear-gradient(to left, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 50%, transparent 100%)",
        }}
      />
      
      {/* Floating Leaves */}
      <div className="absolute top-10 left-1/4 w-16 h-16 bg-lime-200 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <span className="text-lime-700 font-bold tracking-widest text-xs uppercase mb-4 block">
            Our Specialty
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-[#2c3e2e] leading-[1.1] mb-6">
            Greek <br />
            <span className="text-lime-700">Mountain Tea</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
            Enjoy 20% OFF gift cards <br /> no code needed. Experience the freshness of nature.
          </p>
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#2c3e2e] px-8 py-4 text-sm font-bold tracking-wider hover:bg-[#2c3e2e] hover:text-white hover:border-[#2c3e2e] transition-all duration-300 shadow-sm"
          >
            Shop Our Teas <FaChevronRight className="text-xs" />
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
