import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account or create a new one.",
}

export default function Auth() {
  return <LoginTemplate />
}

