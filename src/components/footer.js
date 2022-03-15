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
        <Title>Hi there, I'm Emily.</Title>
        <div>
          <p>
            I'm a software engineer based in Dublin, Ireland. I write React,
            Typescript, and Ruby on Rails at{" "}
            <a
              href="https://tines.com/careers"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tines
            </a>
            . I lurk in the mechanical keyboard, skincare, Genshin Impact, and
            tech communities in my free time.
          </p>
          <p>
            Before that, I studied computer science at{" "}
            <a
              href="https://www.ucd.ie/cs"
              rel="noopener noreferrer"
              target="_blank"
            >
              UCD
            </a>
            , dabbling in mostly Java and some Python. I also managed finances
            at{" "}
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
            Even before that? HTML CSS were my gateways to tell a computer what
            to do. You may have heard of the{" "}
            <a
              href="https://mashable.com/article/tumblr-girl-learn-code"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tumblr girl to software engineer pipeline
            </a>{" "}
            - I hung out in a local Blogger community before moving to Tumblr
            for the fandoms.
          </p>
          <p>I think creating accessible, beautiful, useful things is neat.</p>
        </div>
        <StaticQuery
          query={graphql`
            query FooterContentQuery {
              contentJson {
                contact {
                  repo_name
                  repo_link
                }
              }
            }
          `}
          render={(data) => (
            <p>
              <SiteDetails
                url={data.contentJson.contact.repo_link}
                text={data.contentJson.contact.repo_name}
              />
            </p>
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
