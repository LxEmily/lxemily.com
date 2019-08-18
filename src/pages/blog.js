import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
    return (
    <Layout>
        <SEO title="Blog" />

        <div>
            <h3>Blog</h3>
            <h4>{ data.allMarkdownRemark.totalCount } post(s)</h4>

            { data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <PostLink to={node.fields.slug}>
                        <PostTitle>
                            { node.frontmatter.title }
                        </PostTitle>
                    </PostLink>
                    <PostDate>Posted on { node.frontmatter.date }</PostDate>
                    <PostDescription>{ node.frontmatter.description }</PostDescription>
                    <PostExcerpt>{ node.excerpt }</PostExcerpt>
                </div>
            )) }
        </div>
    </Layout>
    )
}

export default Blog

export const query = graphql `
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        description
                        title
                        date
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

const PostLink = styled(Link)`
  text-decoration: none;
`

const PostTitle = styled.h3`
  color: purple;
  margin-bottom: 15px; 
`

const PostDate = styled.h6`
  color: gray;
  margin: 0 0 30px 0;
`

const PostDescription = styled.p`
    font-size: 14px;
    color: gray;
`

const PostExcerpt = styled.p`
font-size: 16px;
`

