import React from "react"

import Logo from  "../assets/svg/platonico_logo.svg"

const Header = ({ company, date }) => (
  <header>
    <Logo className="logo-header"/>
    <p>{company}</p>
    <p>{date}</p>
  </header>
)

export default Header
