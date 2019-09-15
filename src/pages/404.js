import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import 'tachyons'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>This ain't it chief. Check your URL.</p>
      <Link to="/" style={{color: 'white'}}>Back to home</Link>
    </Container>
  </Layout>
)

const Container = styled.div.attrs({
  className: `center w-75-l w-80 vh-100 flex flex-column justify-center whiteText darkerBG`
})``

export default NotFoundPage
