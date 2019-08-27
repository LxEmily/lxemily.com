import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import 'tachyons'
import "./colors.css"
import SocialMedia from "./socialmedia"

const Container = styled.div.attrs({
    className: `pv4 mt6 flex flex-row flex-wrap justify-around items-center darkBG code`
})``

const RepoLink = styled.a.attrs({
    className: `no-underline gitStats pointer`
})``

const MadeWithLove = ({ url, text }) => (
    <RepoLink href={ url } rel="noopener noreferrer" target="_blank" title="Repository for this site">{ text }</RepoLink>
)

const Footer = () => {
    return (
        <Container>
            <StaticQuery 
                query={graphql`
                    query FooterContentQuery {
                        contentJson {
                            footer {
                                github_link_msg
                                github_link_url
                            }
                        }
                    }
            `}

            render={data => (            
                <MadeWithLove 
                    url={ data.contentJson.footer.github_link_url }
                    text={ data.contentJson.footer.github_link_msg }
                />                
            )}
            />

            <SocialMedia />
        </Container>
    )
}

export default Footer