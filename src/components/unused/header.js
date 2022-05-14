import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "tachyons"
import "./colors.css"

const Container = styled.div.attrs({
  className: `z-1 flex flex-row flex-wrap justify-around items-center darkerBG code`,
})``

const LinksContainer = styled.div.attrs({
  className: `flex flex-row flex-wrap items-center darkerBG code`,
})``

const Links = styled.a.attrs({
  className: `pa3 f5 no-underline gitStats pointer`,
})``

const HeaderLinks = ({ url, name }) => (
  <Links href={url} title={name}>
    {name}
  </Links>
)

const Header = ({ siteTitle }) => {
  return (
    <Container>
      <HeaderLinks url={"/"} name={siteTitle} />
      <StaticQuery
        query={graphql`
          query HeaderContentQuery {
            contentJson {
              nav {
                tabs {
                  name
                  url
                }
              }
            }
          }
        `}
        render={(data) => <LinksContainer>{getPages(data)}</LinksContainer>}
      />
    </Container>
  )
}

export default Header

function getPages(data) {
  const array = []
  data.contentJson.nav.tabs.forEach((item) =>
    array.push(
      <HeaderLinks name={item.name} title={item.name} url={item.url} />
    )
  )
  return array
}
