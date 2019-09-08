import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import 'tachyons'
import "./colors.css"
import SocialMedia from "./socialmedia"

// const Container = styled.div.attrs({
//     className: `pv4 mt6 flex flex-row flex-wrap justify-around items-center darkBG code`
// })``

const Container = styled.div.attrs({
    className: `center w-70-l w-100 vh-50-l vh-75 flex flex-wrap flex-row justify-around items-center whiteText darkerBG`
  })``
  

const RepoLink = styled.a.attrs({
    className: `no-underline gitStats pointer`
})``

const Desc = styled.div.attrs({
    className: `w-50-l w-80 lh-copy`
})``

const Contact = styled.div.attrs({
    className: `center`
})``

const Title = styled.p.attrs({
	className: `w-100 tl b`
})``

const MadeWithLove = ({ url, text }) => (
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
                                footer {
                                    about
                                    made_with
                                    github_link_name
                                    github_link_url
                                }
                            }
                        }
                `}

                render={data => ( 
                    <>  
                    <p>{ data.contentJson.footer.about }</p> 
                    <p>
                        { data.contentJson.footer.made_with }       
                        <MadeWithLove 
                            url={ data.contentJson.footer.github_link_url }
                            text={ data.contentJson.footer.github_link_name }
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