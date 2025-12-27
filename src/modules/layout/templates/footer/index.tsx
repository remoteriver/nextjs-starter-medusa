"use client"

import { FaChevronUp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 w-full">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div>
            <LocalizedClientLink
              href="/"
              className="text-3xl font-bold text-[#2c3e2e] tracking-tight inline-flex items-center"
            >
              teapoz<span className="text-lime-600">.</span>
            </LocalizedClientLink>
          </div>

          {/* ABOUT */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#2c3e2e] uppercase text-sm">About</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Company
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  FAQs
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Quality
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Gift Cards
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Contact
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* SHOP */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#2c3e2e] uppercase text-sm">Shop</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <LocalizedClientLink href="/store" className="hover:text-lime-700 transition-colors">
                  Loose Leaf Tea
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/store" className="hover:text-lime-700 transition-colors">
                  Green Teas
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/store" className="hover:text-lime-700 transition-colors">
                  Packaged Teas
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/store" className="hover:text-lime-700 transition-colors">
                  Teaware
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/store" className="hover:text-lime-700 transition-colors">
                  Tea Gifts
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/store" className="hover:text-lime-700 transition-colors">
                  Iced Tea
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* HELP CENTER */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#2c3e2e] uppercase text-sm">Help Center</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Delivery Information
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Terms & Conditions
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Returns & Refunds
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Privacy Notice
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  Shopping
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="#" className="hover:text-lime-700 transition-colors">
                  FAQs
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#2c3e2e] uppercase text-sm">Get in Touch</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              <p>
                <a href="mailto:support@example.com" className="hover:text-lime-700 transition-colors">
                  support@example.com
                </a>
              </p>
              <p>Need help? Call us</p>
              <p>
                <a href="tel:+4065550120" className="text-lime-700 font-medium hover:text-lime-800 transition-colors">
                  + (406) 555-0120
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-gray-200 pt-8 pb-8">
          <div className="text-center mb-6">
            <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
              Payments We Accept
            </h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Payment method logos - using text placeholders, you can replace with actual logos */}
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">G Pay</div>
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">amazon</div>
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">PayPal</div>
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">Paytm</div>
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">PhonePe</div>
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">RuPay</div>
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">MasterCard</div>
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">VISA</div>
            <div className="px-4 py-2 bg-gray-50 rounded text-xs font-semibold text-gray-600">CASH ON DELIVERY</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-4">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Teapoz. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Media Icons */}
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-lime-600 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-sm" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-lime-600 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-sm" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-lime-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-sm" />
            </a>
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-lime-700 transition-colors"
            >
              <span className="hidden md:inline">BACK TO TOP</span>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-lime-600 hover:text-white transition-colors">
                <FaChevronUp className="text-xs" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
