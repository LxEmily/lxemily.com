import React from "react"
import styled from "styled-components"
import Icons from "./icons"
import "../styles/colors.css"

const Link = styled.a.attrs({
  className: `no-underline`,
})`
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
`

const Logo = styled.div.attrs({
  className: `logo`,
})``

const LogoLink = ({ name, url, className }) => {
  return (
    <Link
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={name}
      role="button"
    >
      <Logo className={className}>
        <Icons name={name} />
        {/* <div className="name">{name}</div> */}
      </Logo>
      {/* <span className="screen-reader-only">{name}</span> */}
    </Link>
  )
}
export default LogoLink
