import React from "react"
import styled from "styled-components"
import Icons from "./icons"
import "../styles/colors.css"

const Link = styled.a.attrs({
    className: `no-underline`
})``

const Logo = styled.div.attrs({
    className: `logo`
})``

const LogoLink = ({ name, url }) => {
    return (
        <Link href={ url } rel="noopener noreferrer" target="_blank">
            <Logo>
                <Icons name={ name } />
            </Logo>
        </Link>
    )
}
export default LogoLink