import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import 'tachyons'

const Container = styled.div.attrs({
  className: `center w-75-l w-80 vh-100 flex flex-column items-center justify-center whiteText darkerBG`
})``

const BackToHome = styled(Link)`
  text-decoration: none;
  color: #99AAB5;
  font-size: 2rem;
  transition: all .5s ease-in;

  &:hover, &:focus {
    color: white;
    transition: all .5s ease-in;
  }
`

const ErrorMessage = styled.p.attrs({
  className: `normal f3`
})``

const ErrorTitle = styled.h1.attrs({
  className: `f1`
})``

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title="404 Not Found" />
      <ErrorTitle>404 NOT FOUND</ErrorTitle>
      <ErrorMessage>This ain't it chief. Check your URL.</ErrorMessage>
      <BackToHome to="/">Go Back Home</BackToHome>
    </Container>
  </Layout>
)
export default NotFoundPage