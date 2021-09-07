import React from "react"
import styled from "styled-components"
import "tachyons"
import "../styles/colors.css"
import Link from "../LinkWithPrevPath"

const Title = styled.h1.attrs({
  className: `lh-title`,
})``

const BlogNav = ({ location }) => {
  const prevPath =
    location && location.state ? location.state.prevPath : "/home"
  const currPath =
    location && location.state ? location.state.pathname : "/blog"
  return (
    <>
      <p className="mb4 lh-copy">
        {prevPath === "/blog" ? (
          <Link to="/blog">← Back to blog</Link>
        ) : (
          <Link to="/">← Back to home</Link>
        )}
      </p>

      {currPath === "/blog" ? <Title>Blog</Title> : ""}
    </>
  )
}

export default BlogNav
