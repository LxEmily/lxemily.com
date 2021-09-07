import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import IndexBlogContainer from "./blog/IndexBlogContainer"

const Title = styled.h2.attrs({
  className: `center w-100 mv4 lh-title`,
})``

const PostTitle = styled.h3.attrs({
  className: `mv2`,
})``

const PostDate = styled.p.attrs({
  className: `grayerText pt0 ma0 f6 i`,
})``

const PostExcerpt = styled.p.attrs({
  className: `lh-copy mb4 mt2`,
})``

const ViewBlog = styled.p.attrs({
  className: `mv2`,
})``

const Blog = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            limit: 3
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
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
      `}
      render={(data) => (
        <IndexBlogContainer>
          <Title>Blog</Title>

          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <PostTitle>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </PostTitle>

              <PostDate>{node.frontmatter.date}</PostDate>
              <PostExcerpt>{node.excerpt}</PostExcerpt>
            </div>
          ))}

          <ViewBlog>
            <Link to="/blog">View more →</Link>
          </ViewBlog>
        </IndexBlogContainer>
      )}
    />
  )
}

export default Blog
