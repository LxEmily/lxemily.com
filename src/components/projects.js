import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import 'tachyons'
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
	className: `w-75-l w-80 h-100 center flex flex-wrap flex-row items-stretch justify-center darkerBG whiteText`
})``

const Title = styled.h2.attrs({
	className: `w-100`
})``

const Project = styled.div.attrs({
	className: `ma2 pv2 ph3 br1 flex flex-column justify-around w-25-l w-40-m w-100 project`
})`min-width:250px`

const Header = styled.div.attrs({
	className: `flex flex-nowrap flex-row justify-end order-0 h3`
})`
	/*background-image:*/
`

const Content = styled.div.attrs({
	className: `order-1`
})``

const Name = styled.h3.attrs({
	className: `mv3`
})``

const Desc = styled.p.attrs({
	className: `lh-title`
})`
`

const Footer = styled.div.attrs({
	className: `flex flex-nowrap flex-column order-2`
})`
`

const Stars = styled.span.attrs({
	className: `ph2 flex flex-nowrap items-center code logo gitStats`
})``

const Forks = styled.span.attrs({
	className: `ph2 flex flex-nowrap items-center code logo gitStats`
})``

const FlexRow = styled.div.attrs({
	className: `flex flex-nowrap flex-row`
})``

const FlexEnd = styled.span.attrs({
	className: `flex flex-nowrap flex-row justify-end`
})``

const Tech = styled.span.attrs({
	className: `f6 pr2 pv1`
})``

const TechList = styled.div.attrs({
	className: `code flex flex-wrap flex-row grayerText`
})`
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

			{ edges.map(({ node }) =>
				<Project>
					<Header>
						<FlexRow>
							{ node.url && (<LogoLink name="Github" url={ node.url } />) }
							{ node.homepageUrl && (<LogoLink name="External" url={ node.homepageUrl } />) }
						</FlexRow>
					</Header>

					<Content>
						<Name>{ node.name }</Name>
						<Desc>{ node.shortDescriptionHTML }</Desc>
					</Content>

					<Footer>
						<FlexEnd>
							<FlexRow>
								<Stars title="GitHub Stars"><Icons name="GithubStar" />{ node.stargazerCount }</Stars>
								<Forks title="GitHub Forks"><Icons name="GithubFork" />{ node.forkCount }</Forks>
							</FlexRow>
						</FlexEnd>
						<TechList>
              { node.repositoryTopics.edges.map((topics, i) => (
                <Tech key={i}>{ topics.node.topic.name }</Tech>
              )) }
              { node.languages.edges.map((lang, i) => (
                <Tech key={i}>{lang.node.name.toLowerCase()}</Tech>
              )) }
            </TechList>
					</Footer>
				</Project>
			)}


        </Container>
    )
}

export default Projects