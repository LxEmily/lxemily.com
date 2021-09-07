import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "tachyons"
import "../styles/colors.css"

const Title = styled.h3.attrs({
  className: `center w-100 mv4 lh-title`,
})``

const BlogLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.15s ease-in;

  &:hover {
    color: #99aab5;
    transition: color 0.15s ease-in;
  }
`

const BlogNav = () => {
  return (
    <>
      <BlogLink to="/">Back to Home</BlogLink>
      <BlogLink to="/blog">
        <Title>Emily's Thoughts.</Title>
      </BlogLink>
    </>
  )
}

export default BlogNav
