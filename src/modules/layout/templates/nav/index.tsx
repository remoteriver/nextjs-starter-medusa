import { Suspense } from "react"
import { FaMagnifyingGlass, FaRegUser, FaRegHeart, FaBagShopping } from "react-icons/fa6"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"

export default function Nav() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            {/* Search */}
            <div className="hidden md:flex items-center w-1/4">
              <button className="text-gray-500 hover:text-lime-700 transition-colors">
                <FaMagnifyingGlass className="text-lg" />
              </button>
              <span className="ml-3 text-sm text-gray-500 cursor-pointer hover:text-lime-700">Search</span>
            </div>

            {/* Logo */}
            <div className="flex-1 text-center">
              <LocalizedClientLink
                href="/"
                className="text-4xl font-bold text-[#2c3e2e] tracking-tight"
              >
                teapoz<span className="text-lime-600">.</span>
              </LocalizedClientLink>
            </div>

            {/* Actions */}
            <div className="w-1/4 flex justify-end items-center gap-6">
              <LocalizedClientLink
                href="/account"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-lime-700 transition-colors"
              >
                <FaRegUser className="text-lg" />
                <span className="hidden lg:inline">Login / Register</span>
              </LocalizedClientLink>
              <LocalizedClientLink
                href="#"
                className="text-gray-600 hover:text-lime-700 transition-colors relative"
              >
                <FaRegHeart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-lime-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </LocalizedClientLink>
              <div className="text-gray-600 hover:text-lime-700 transition-colors">
                <Suspense fallback={
                  <LocalizedClientLink href="/cart" className="relative">
                    <FaBagShopping className="text-lg" />
                    <span className="absolute -top-2 -right-2 bg-lime-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                  </LocalizedClientLink>
                }>
                  <CartButton />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200">
          <nav className="container mx-auto px-4 flex justify-center items-center gap-10 py-6 text-sm font-medium uppercase tracking-wide text-gray-600">
            <LocalizedClientLink href="/" className="hover:text-lime-700 transition-colors">
              Home
            </LocalizedClientLink>
            <LocalizedClientLink href="/store" className="hover:text-lime-700 transition-colors">
              Shop
            </LocalizedClientLink>
            <LocalizedClientLink href="/store" className="hover:text-lime-700 transition-colors">Sale</LocalizedClientLink>
            <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
              Blog
            </LocalizedClientLink>
            <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
              Pages
            </LocalizedClientLink>
            <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">Contact</LocalizedClientLink>
          </nav>
        </div>
      </header>
    </>
  )
}
