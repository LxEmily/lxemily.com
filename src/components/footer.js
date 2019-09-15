import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import 'tachyons'
import "./colors.css"
import SocialMedia from "./socialmedia"

const Container = styled.div.attrs({
    className: `center w-75-l w-80 vh-50-l vh-75 flex flex-wrap flex-row justify-between items-center whiteText darkerBG`
  })``  

const RepoLink = styled.a.attrs({
    className: `no-underline gitStats pointer`
})``

const Desc = styled.div.attrs({
    className: `w-50-l w-100 lh-copy`
})``

const Contact = styled.div.attrs({
    className: ``
})``

const Title = styled.h2.attrs({
	className: `w-100 tl b`
})``

const SiteDetails = ({ url, text }) => (
    <RepoLink href={ url } rel="noopener noreferrer" target="_blank" title="Repository for this site">{ text }</RepoLink>
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

                render={data => ( 
                    <>  
                    <p>{ data.contentJson.contact.about }</p> 
                    <p>
                        { data.contentJson.contact.site }       
                        <SiteDetails 
                            url={ data.contentJson.contact.repo_link }
                            text={ data.contentJson.contact.repo_name }
                        />
                    </p>   
                    </>             
                )}
                />
            </Desc>

            <Contact><SocialMedia /></Contact>
        </Container>
    )
}

export default Footer