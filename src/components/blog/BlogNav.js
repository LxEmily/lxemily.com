import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import 'tachyons'
import "../colors.css"

const Title = styled.h3.attrs({
    className: `center w-100 mv4 lh-copy`
})``

const BlogLink = styled(Link)`
    text-decoration: none;
    color: white;
    transition: color .15s ease-in;

    &:hover {
        color: #99AAB5;
        transition: color .15s ease-in;
    }
`

const BlogNav = () => {
    return(
        <>
            <BlogLink to="/">Back to Home</BlogLink>
            <BlogLink to="/blog"><Title>Emily's Thoughts.</Title></BlogLink>
        </>
    )
}

export default BlogNav