import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEOComponent from "../components/seo"
import BlogContainer from "../components/blog/BlogContainer"
import BlogNav from "../components/blog/BlogNav"
import "../components/styles/syntax-highlighting.css"

const PostTitle = styled.h1.attrs({
  className: `mv3 lh-title`,
})``

const PostDate = styled.p.attrs({
  className: `grayerText pt0 ma0 f6 i`,
})``

const PostContents = styled.div.attrs({
  className: `mv4 lh-copy`,
})``

/* Retrieve the slug that matches a given $slug */
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`
const Posts = ({ location, data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEOComponent
        title={post.frontmatter.title}
        description={post.excerpt}
        url={post.fields.slug}
        type={`article`}
      />
      <BlogContainer>
        <BlogNav location={location} />
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostContents
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></PostContents>
      </BlogContainer>
    </Layout>
  )
}

export default Posts
