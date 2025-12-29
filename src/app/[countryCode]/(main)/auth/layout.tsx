import { Toaster } from "@medusajs/ui"
import LoginLayout from "@modules/account/templates/login-layout"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <LoginLayout>{children}</LoginLayout>
      <Toaster />
    </>
  )
}

