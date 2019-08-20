import React, { Component } from 'react';
import styled from 'styled-components';
import 'tachyons';
import Logo from "../components/icons/logo"
import Icons from "../components/icons/icons"

/** Projects Section
 * Container: Contains all projects
 * Title: Section Title
 * Project "Cards", contains
 *   Header: Links to demo, github
 *   Name, Desc
 *   Footer: topics, languages
 */

/* const Container = styled.div.attrs({
	className: `w-80-l w-90 center`
})`` */

/* Originally Repo List */
const Container = styled.div.attrs({
	className: `pb3 w-100 flex flex-wrap flex-row justify-center items-center`
})``

const Title = styled.h2.attrs({
	className: `w-100 ma0 pa3 tc`
})``

const Project = styled.div.attrs({
	className: `ma2 pa2 shadow-4 br2 w5 h5 relative`
})``

/*
const ProjectWrapper = styled.div.attrs({
	className: "w5 h5 relative"
})`` */

const Header = styled.div.attrs({
	className: `flex flex-nowrap flex-row justify-end items-center`
})`
	/*background-image:*/
`

const Name = styled.h3.attrs({
	className: `mv0`
})``

const Desc = styled.p.attrs({
	className: `lh-title`
})``

const Footer = styled.span.attrs({
	className: `w-100 absolute left-0 bottom-0 flex flex-nowrap flex-column`
})``

const Stars = styled.span.attrs({
	className: `ph2 flex flex-nowrap items-center font-ubuntu-mono`
})``

const Forks = styled.span.attrs({
	className: `ph2 flex flex-nowrap items-center font-ubuntu-mono`
})``

const FlexRow = styled.div.attrs({
	className: `flex flex-nowrap flex-row`
})``

const FlexBetween = styled.span.attrs({
	className: `flex flex-nowrap flex-row justify-between`
})``

const Language = styled.span.attrs({
	className: `f6 pr3 pv1`
})``

const Languages = styled.div.attrs({
	className: `pt1 font-ubuntu-mono flex flex-wrap flex-row`
})``

const Projects = () => {
    return (
        <Container>
            <Title>Projects</Title>
			<Project>
				<Header>
					<FlexRow>
						<Logo><Icons name="Github"></Icons></Logo>
						<Logo><Icons name="External"></Icons></Logo>
					</FlexRow>
				</Header>

				<Name>Name</Name>
				<Desc>Description</Desc>

				<Footer>
					<FlexBetween>
						<FlexRow>
							<Stars>star</Stars>
							<Forks>fork</Forks>
						</FlexRow>
					</FlexBetween>
				</Footer>
			</Project>
        </Container>
    )
}

export default Projects