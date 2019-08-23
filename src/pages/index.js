import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

require('typeface-raleway')
require('typeface-inconsolata')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello world</h1>
    <p>This is a homepage.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     <Image />
    </div>
  </Layout>
)

export default IndexPage