import React from "react"

import Seo from "../components/seo"
import Logo from "../assets/svg/platonico_logo.svg"

import "../assets/styles/custom.scss"
const IndexPage = () => (
  <>
    <Seo title="Proposals" />
    <div className="wrapper">
      <Logo className="logo" />
    </div>
  </>
)

export default IndexPage
