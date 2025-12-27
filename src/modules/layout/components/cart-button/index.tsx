import { retrieveCart } from "@lib/data/cart"
import CartIconDropdown from "../cart-icon-dropdown"

export default async function CartButton() {
  const cart = await retrieveCart().catch(() => null)

  return <CartIconDropdown cart={cart} />
}
