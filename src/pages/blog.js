import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContainer from "../components/blog/BlogContainer"
import BlogNav from "../components/blog/BlogNav"

const Blog = ({ data }) => {
    return (
    <Layout>
        <SEO title="Blog" />

        <BlogContainer>
            {/* <h4>{ data.allMarkdownRemark.totalCount } post(s)</h4> */}
            <BlogNav />
            { data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={ node.id }>
                    <PostLink to={ node.fields.slug }>
                        <PostTitle>
                            { node.frontmatter.title }
                        </PostTitle>
                    </PostLink>
                    <PostDate>{ node.frontmatter.date }</PostDate>
                    {/* <PostDescription>{ node.frontmatter.description }</PostDescription> */}
                    <PostExcerpt>{ node.excerpt }</PostExcerpt>
                </div>
            )) }
        </BlogContainer>
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
                        title
                        date(formatString: "MMMM DD, YYYY")
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
    color: white;
    transition: color .15s ease-in;

    &:hover {
        color: #99AAB5;
        transition: color .15s ease-in;
    }
`

const PostTitle = styled.h2.attrs({
    className: `mv2`
})``

const PostDate = styled.p.attrs({
    className: `grayerText pt0 ma0 f6 i`
})``

// const PostDescription = styled.p`
//     font-size: 14px;
//     color: gray;
// `

const PostExcerpt = styled.p.attrs({
    className: `lh-copy mb4 mt2`
})``

