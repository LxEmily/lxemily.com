import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import IndexBlogContainer from "./blog/IndexBlogContainer"

const Title = styled.h2.attrs({
	className: `center w-100 mv4 lh-copy`
})``

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    transition: color .15s ease-in;

    &:hover {
        color: #99AAB5;
        transition: color .15s ease-in;
    }
`

const PostTitle = styled.h3.attrs({
    className: `mv2`
})``

const PostDate = styled.p.attrs({
    className: `grayerText pt0 ma0 f6 i`
})``

const PostExcerpt = styled.p.attrs({
    className: `lh-copy mb4 mt2`
})``

const ViewBlog = styled.p.attrs({
    className: `mv2 f4`
})``

const Blog = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
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

            render={data => (
                <IndexBlogContainer>
                    <Title>Blog</Title>

                    { data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={ node.id }>
                            <StyledLink to={ node.fields.slug }>
                                <PostTitle>
                                    { node.frontmatter.title }
                                </PostTitle>
                            </StyledLink>
                            <PostDate>{ node.frontmatter.date }</PostDate>
                            <PostExcerpt>{ node.excerpt }</PostExcerpt>
                        </div>
                    )) }
                    
                    <StyledLink to="/blog"><ViewBlog>View more</ViewBlog></StyledLink>
                </IndexBlogContainer>
            )}
        />
    )
}

export default Blog