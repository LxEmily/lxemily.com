import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "tachyons"
import "./styles/colors.css"
import SocialMedia from "./socialmedia"
import StyledLink from "./StyledLink"

const Container = styled.div.attrs({
  className: `center vh-50-l vh-75 flex flex-wrap flex-row justify-between items-center whiteText darkerBG`,
})`
  max-width: 42rem;
  padding: 0 2rem;
`

const RepoLink = styled.a.attrs({
  className: `no-underline gitStats pointer`,
})``

const Desc = styled.div.attrs({
  className: `w-50-l w-100 lh-copy`,
})``

const Contact = styled.div.attrs({
  className: ``,
})``

const Title = styled.h2.attrs({
  className: `w-100 tl b`,
})``

const SiteDetails = ({ url, text }) => (
  <RepoLink
    href={url}
    rel="noopener noreferrer"
    target="_blank"
    title="Repository for this site"
  >
    {text}
  </RepoLink>
)

const Footer = () => {
  return (
    <Container>
      <Desc>
        <Title>About</Title>
        <StaticQuery
          query={graphql`
            query FooterContentQuery {
              contentJson {
                contact {
                  about
                  site
                  repo_name
                  repo_link
                }
              }
            }
          `}
          render={(data) => (
            <>
              {/* <p>{data.contentJson.contact.about}</p> */}
              <p>
                Emily is a recent Computer Science graduate from{" "}
                <StyledLink href="https://www.ucd.ie">
                  University College Dublin
                </StyledLink>
                . Previously, she managed finances at{" "}
                <StyledLink href="https://netsoc.com">
                  UCD Internet Society
                </StyledLink>{" "}
                and QA-ed mobile apps at{" "}
                <StyledLink href="https://ding.com">Ding.com</StyledLink>. She
                likes playing Hades and Genshin Impact in her down time.
              </p>
              <p>
                {data.contentJson.contact.site}
                <SiteDetails
                  url={data.contentJson.contact.repo_link}
                  text={data.contentJson.contact.repo_name}
                />
              </p>
            </>
          )}
        />
      </Desc>

      <Contact>
        <SocialMedia />
      </Contact>
    </Container>
  )
}

export default Footer
