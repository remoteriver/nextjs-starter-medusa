import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body className="font-sans text-gray-800 antialiased bg-white selection:bg-lime-200 selection:text-lime-900">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
