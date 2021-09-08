import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "tachyons"
import LogoLink from "../components/icons/logoLink"
import Icons from "../components/icons/icons.js"
import "./styles/colors.css"

/** Projects Section
 * Container: Contains all projects
 * Title: Section Title
 * Project "Cards", contains
 *   Header: Links to demo, github
 *   Name, Desc
 *   Footer: topics, languages
 */

const Container = styled.div.attrs({
  className: `h-100 center darkerBG whiteText`,
})`
  max-width: 42rem;
  padding: 0 2rem;
`

const Title = styled.h2.attrs({
  className: `w-100`,
})``

const ProjectGrid = styled.div.attrs({})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
  gap: 15px;
`

const Project = styled.div.attrs({
  className: `w-100 br1 flex flex-column justify-around project`,
})`
  min-height: 20em;
  padding: 1.65em 1.45em;
`

const Header = styled.div.attrs({
  className: `flex flex-nowrap justify-between mt2 mb3`,
})`
  /*background-image:*/
`

const Content = styled.div.attrs({
  className: ``,
})``

const NameContainer = styled.h3.attrs({
  className: `lh-solid mb0 flex justify-center items-center`,
})`
  min-height: 3rem;
`

const Desc = styled.p.attrs({
  className: `lh-copy`,
})``

const Footer = styled.div.attrs({
  className: `flex flex-nowrap flex-column order-2`,
})``

const Stars = styled.span.attrs({
  className: `ph2 flex flex-nowrap items-center code logo gitStats`,
})``

const Forks = styled.span.attrs({
  className: `ph2 flex flex-nowrap items-center code logo gitStats`,
})``

const FlexRow = styled.div.attrs({
  className: `flex flex-nowrap flex-row`,
})``

const FlexEnd = styled.span.attrs({
  className: `flex flex-nowrap flex-row justify-end`,
})``

const Tech = styled.span.attrs({
  className: `pr2 pv1`,
})``

const TechList = styled.div.attrs({
  className: `flex flex-wrap flex-row grayerText`,
})`
  font-family: "Fantasque Sans Mono", "Inconsolata", "SFMono-Regular", Consolas,
    "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier,
    monospace;
  font-size: 0.8em;
`

const Projects = () => {
  const {
    github: {
      user: {
        pinnedItems: { edges },
      },
    }, //privacy: PUBLIC
  } = useStaticQuery(graphql`
    {
      github {
        user(login: "lxemily") {
          pinnedItems(first: 4) {
            edges {
              node {
                ... on GitHub_Repository {
                  id
                  name
                  forkCount
                  description
                  shortDescriptionHTML
                  stargazerCount
                  url
                  homepageUrl
                  languages(first: 4) {
                    totalCount
                    edges {
                      node {
                        color
                        name
                      }
                    }
                  }
                  repositoryTopics(first: 4) {
                    edges {
                      node {
                        topic {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectGrid>
        {edges.map(({ node }) => (
          <Project key={node.id}>
            <Header>
              {/* <FlexRow> */}
              <NameContainer>{node.name}</NameContainer>
              <div className="flex flex-row items-center justify-center">
                {node.url && <LogoLink name="Github" url={node.url} />}
                {node.homepageUrl && (
                  <LogoLink name="External" url={node.homepageUrl} />
                )}
              </div>
              {/* </FlexRow> */}
            </Header>

            <Content>
              <Desc>{node.shortDescriptionHTML}</Desc>
            </Content>

            <Footer>
              {/* <FlexEnd>
                <FlexRow>
                  <Stars title="GitHub Stars">
                    <Icons name="GithubStar" />
                    {node.stargazerCount}
                  </Stars>
                  <Forks title="GitHub Forks">
                    <Icons name="GithubFork" />
                    {node.forkCount}
                  </Forks>
                </FlexRow>
              </FlexEnd> */}
              <TechList>
                {node.repositoryTopics.edges.map((topics, i) => (
                  <Tech key={i}>{topics.node.topic.name}</Tech>
                ))}
                {/* {node.languages.edges.map((lang, i) => (
                  <Tech key={i}>{lang.node.name.toLowerCase()}</Tech>
                ))} */}
              </TechList>
            </Footer>
          </Project>
        ))}
      </ProjectGrid>
      <p className="mv3">
        <a
          href="https://github.com/lxemily"
          rel="noopener noreferrer"
          target="_blank"
        >
          View more projects →
        </a>
      </p>
    </Container>
  )
}

export default Projects
