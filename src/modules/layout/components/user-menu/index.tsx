import { retrieveCustomer } from "@lib/data/customer"
import { FaRegUser } from "react-icons/fa6"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function UserMenu() {
  const customer = await retrieveCustomer().catch(() => null)

  if (customer) {
    return (
      <LocalizedClientLink
        href="/account"
        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-lime-700 transition-colors"
      >
        <FaRegUser className="text-lg" />
        <span className="hidden lg:inline">{customer.first_name || customer.email}</span>
      </LocalizedClientLink>
    )
  }

  return (
    <LocalizedClientLink
      href="/account"
      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-lime-700 transition-colors"
    >
      <FaRegUser className="text-lg" />
      <span className="hidden lg:inline">Login / Register</span>
    </LocalizedClientLink>
  )
}

