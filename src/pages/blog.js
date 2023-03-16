import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEOComponent from "../components/seo"
import BlogContainer from "../components/blog/BlogContainer"
import BlogNav from "../components/blog/BlogNav"
import Link from "../components/LinkWithPrevPath"

// const PostLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   transition: color 0.15s ease-in;

//   &:hover {
//     color: #99aab5;
//     transition: color 0.15s ease-in;
//   }
// `

const PostTitle = styled.h2.attrs({
  className: `mv2`,
})``

const PostDate = styled.p.attrs({
  className: `grayerText pt0 ma0 f6 i`,
})``

// const PostDescription = styled.p`
//     font-size: 14px;
//     color: gray;
// `

const PostExcerpt = styled.p.attrs({
  className: `lh-copy mb4 mt2`,
})``

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEOComponent title="Blog" description="Emily Liew's Blog" url="/blog" />

      <BlogContainer>
        {/* <h4>{ data.allMarkdownRemark.totalCount } post(s)</h4> */}
        <BlogNav />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <PostTitle>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </PostTitle>

            <PostDate>{node.frontmatter.date}</PostDate>
            {/* <PostDescription>{ node.frontmatter.description }</PostDescription> */}
            <PostExcerpt>{node.excerpt}</PostExcerpt>
          </div>
        ))}
      </BlogContainer>
    </Layout>
  )
}

export default Blog
