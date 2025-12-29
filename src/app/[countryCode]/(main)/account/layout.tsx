import { retrieveCustomer } from "@lib/data/customer"
import { Toaster } from "@medusajs/ui"
import AccountLayout from "@modules/account/templates/account-layout"
import LoginLayout from "@modules/account/templates/login-layout"

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode
  login?: React.ReactNode
}) {
  const customer = await retrieveCustomer().catch(() => null)

  return (
    customer ?  <AccountLayout customer={customer}>
    {dashboard}
    <Toaster />
  </AccountLayout> :  <LoginLayout>
    {login}
    <Toaster />
  </LoginLayout>
  )

}
