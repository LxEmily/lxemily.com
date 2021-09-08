import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "tachyons"
import "./styles/colors.css"
import SocialMedia from "./socialmedia"

const Container = styled.div.attrs({
  className: `center whiteText darkerBG mb5`,
})`
  max-width: 42rem;
  padding: 0 2rem;
`

const RepoLink = styled.a.attrs({
  className: ``,
})``

const Desc = styled.div.attrs({
  className: `lh-copy mb2`,
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
                Emily is a software engineer based in Dublin, Ireland.
                Previously, she studied Computer Science at{" "}
                <a
                  href="https://www.ucd.ie/cs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  UCD
                </a>
                , managed finances at{" "}
                <a
                  href="https://netsoc.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  UCD Netsoc
                </a>
                , and QA-ed mobile apps at{" "}
                <a
                  href="https://ding.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ding.com
                </a>
                .
              </p>
              <p>
                She thinks Hades, Genshin Impact, and mechanical keyboards are
                cool. Her inbox is open for new opportunities and chit chat!
              </p>
              <p>
                {/* {data.contentJson.contact.site} */}
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
