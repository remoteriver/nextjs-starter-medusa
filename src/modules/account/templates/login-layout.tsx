import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

interface LoginLayoutProps {
  children: React.ReactNode
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="flex-1 small:py-12" data-testid="login-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col">
          <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

export default LoginLayout

