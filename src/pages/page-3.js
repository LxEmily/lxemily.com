import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the THIRD page</h1>
    <p>Welcome to page 3!!!!</p>
    <Nav></Nav>
  </Layout>
)

export default ThirdPage
