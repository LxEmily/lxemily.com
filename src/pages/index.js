import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import Projects from "../components/projects"
import Blog from "../components/blog"
import Footer from "../components/footer"
import SEOComponent from "../components/seo"

import "@fontsource/inter"
require('typeface-raleway')
require('typeface-inconsolata')

const IndexPage = () => (
  <Layout>
    <SEOComponent
      title=""
      url=""
    />
    <Home />
    <Projects />
    <Blog />
    <Footer />
  </Layout>
)

export default IndexPage