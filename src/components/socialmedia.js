import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "tachyons"
import "./styles/colors.css"
import LogoLink from "../components/icons/logoLink"

const Container = styled.div.attrs({
  className: `flex flex-row flex-wrap ma0`,
})``

const SocialMedia = () => {
  return (
    <StaticQuery
      query={graphql`
        query SocialMediaContentQuery {
          contentJson {
            contact {
              SocialMedia {
                name
                url
              }
            }
          }
        }
      `}
      render={(data) => <Container>{getSocialMedia(data)}</Container>}
    />
  )
}

export default SocialMedia

function getSocialMedia(data) {
  const array = []
  data.contentJson.contact.SocialMedia.forEach((item) =>
    array.push(<LogoLink key={item.name} name={item.name} url={item.url} />)
  )
  return array
}
