import React from "react"
import styled from "styled-components"
import Icons from "./icons"
import "../colors.css"

const Link = styled.a.attrs({
    className: `no-underline`
})``

const Logo = styled.div.attrs({
    className: `logo`
})`
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 0.5rem;
`

const LogoLink = ({ name, url }) => {
    return (
        <Link href={ url } rel="noopener noreferrer" target="_blank">
            <Logo>
                <Icons name={name} />
            </Logo>
        </Link>
    )
}
export default LogoLink