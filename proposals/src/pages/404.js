import React from "react"
import Header from "../components/header"

import Seo from "../components/seo"

import "../assets/styles/custom.scss"

//TODO: Design and implement

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Header company="" date=""/>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
