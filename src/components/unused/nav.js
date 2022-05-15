import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "tachyons"
import "./colors.css"

const Container = styled.div.attrs({
  className: `flex flex-column justify-center items-center content-center
                w-100 h-100 mv0 center  
                z-1 fixed right-0 top-0
                darkerBG code o-80 tc
                nav`,
})``
const NavContainer = ({ toggle }) => <Container />

// comment

const Links = styled.a.attrs({
  className: `pa3 f1 no-underline db gitStats pointer`,
})``
const NavLinks = ({ url, name }) => (
  <Links href={url} title={name}>
    {name}
  </Links>
)

const Btn = styled.button.attrs({
  className: `ma3 top-0 right-0 whiteBG whiteText w-20 pointer z-2`,
})``
const NavButton = ({ onClick }) => <Btn onClick={onClick}>BUTTON</Btn>

class Nav extends Component {
  state = {
    NavContainerVisible: false,
  }

  toggleShowNav = () => {
    this.setState({
      NavContainerVisible: !this.state.NavContainerVisible,
    })
  }

  render() {
    const NavContainerVisible = this.state
    return (
      <div>
        <NavButton onClick={this.toggleShowNav} />
        <NavContainer show={this.state.NavContainerVisible}>
          <StaticQuery
            query={graphql`
              query NavContentQuery {
                contentJson {
                  nav {
                    tabs {
                      name
                      url
                    }
                  }
                }
              }
            `}
            render={(data) => <>{getPages(data)}</>}
          />
        </NavContainer>
      </div>
    )
  }
}

export default Nav

function getPages(data) {
  const array = []
  data.contentJson.nav.tabs.forEach((item) =>
    array.push(<NavLinks name={item.name} title={item.name} url={item.url} />)
  )
  return array
}
