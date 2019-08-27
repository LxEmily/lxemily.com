import React from "react"

import Layout from "../components/layout"
import Home from "../components/home"
import Projects from "../components/projects"
import SEO from "../components/seo"

require('typeface-raleway')
require('typeface-inconsolata')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Projects />
  </Layout>
)

export default IndexPage