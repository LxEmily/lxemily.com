import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import 'tachyons'
import "./colors.css"
import SocialMedia from "./socialmedia"

const Container = styled.div.attrs({
  className: `ph7 w-80-l w-100 vh-100 flex flex-column justify-center whiteText darkerBG`
})``

// const Title = styled.h3.attrs({
//   className: `normal grayerText`
// })``

const Name = styled.h1.attrs({
  className: `f1`
})``

const Desc = styled.h3.attrs({
  className: `normal lh-title`
})``

const ResumeBtn = styled.button.attrs({
  className: `normal w-30-l w-auto mv4 br2 bn tracked resumeBtn ttu code f5`
})`
`

// const SocialMedia = () => {}


const Home = () => {
  return (
    <StaticQuery 
      query={graphql`
        query HomeContentQuery {
          contentJson {
            home {
              name
              desc
            }
          }
        }
      `}

      render={data => (
        <Container>
          <Name>{ data.contentJson.home.name }</Name>
          <Desc>{ data.contentJson.home.desc }</Desc>
          {/* <ResumeBtn>Resume</ResumeBtn> */}
          <SocialMedia />
        </Container>
      )}
    />
  )
};  
  
export default Home