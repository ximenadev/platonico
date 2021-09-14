import React from "react"

import Logo from  "../assets/svg/platonico_logo.svg"

const Header = ({ company }) => (
  <header>
    <Logo className="logo-header"/>
    <p>{company}</p>
  </header>
)

export default Header
