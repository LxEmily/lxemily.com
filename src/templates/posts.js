import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import BlogContainer from "../components/blog/BlogContainer"
import BlogNav from "../components/blog/BlogNav"
import "../components/styles/syntax-highlighting.css"

export default ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <BlogContainer>
                <BlogNav />
                <PostTitle>{ post.frontmatter.title }</PostTitle>
                <PostDate>{ post.frontmatter.date }</PostDate>
                <PostContents dangerouslySetInnerHTML={ { __html: post.html } }></PostContents>
            </BlogContainer>
        </Layout>
    )
}

const PostTitle = styled.h1.attrs({
    className: `mv3`
})``

const PostDate = styled.p.attrs({
    className: `grayerText ma0 f5 i`
})``

const PostContents = styled.div.attrs({
    className: `lh-copy mb4 mt5 f4 postContents`
})`
    a {
        text-decoration: none;
        color: #99AAB5;
        transition: color .15s ease-in;
    }

    a:hover, a:focus {        
        color: white;
    }
`

/* Retrieve the slug that matches a given $slug */
export const query = graphql`
    query($slug: String!) {
        markdownRemark( fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`