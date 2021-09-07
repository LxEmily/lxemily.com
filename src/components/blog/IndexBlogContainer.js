import React from "react"
import styled from "styled-components"
import "tachyons"
import "../styles/colors.css"

const Container = styled.div.attrs({
  className: `center mv5 whiteText`,
})`
  max-width: 42rem;
  padding: 0 2rem;
`

class IndexBlogContainer extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default IndexBlogContainer
